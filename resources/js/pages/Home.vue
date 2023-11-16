<template>
	<Vcontainer class="dashboard">
		<Vrow>
			<Vcol :cols="12">
				<div class="justify-content-between">
					<h1>Medicamentos</h1>
					<Vbtn color="primary" size="small" @click="showForm = true"
						>Adicionar medicamento</Vbtn
					>
					<Vbtn color="primary" size="small" @click="showImport = true"
						>Importar Medicamentos</Vbtn
					>
				</div>
			</Vcol>
			<Vcol>
				<Btable
					:headers="header"
					:items="items"
					@delete="onDelete"
					@update="onUpdated"
				>
					<template v-slot:expiration_date="item">
						{{ $moment(item.item.expiration_date).format("DD/MM/YYYY") }}
					</template>
				</Btable>
			</Vcol>
		</Vrow>
	</Vcontainer>

	<Vsnackbar
		v-model="snackbar"
		:message="snackbarMessage"
		:color="snackbarColor"
		:timeout="snackbarTimeout"
	/>

	<Vdialog
		title="Confirmação"
		message="<div class'text-align-center'>Tem certeza que deseja excluir este item?</div>"
		@cancel="cancelDialog()"
		@confirm="deleteConfirm = true"
		v-model="dialog"
	/>

	<MedicineForm
		:show="showForm"
		@close="closeForm"
		@snack="ShowSnackbar"
		:itemUpdate="itemUpdate"
	></MedicineForm>

	<MedicineImport :show="showImport" @close="closeImport" @snack="ShowSnackbar" />
</template>

<script>
export default {
	data() {
		return {
			header: [
				{ title: "id", key: "id" },
				{ title: "Nome do Medicamento", key: "nameMedicine" },
				{ title: "Categoria", key: "category" },
				{ title: "Preço (R$)", key: "price" },
				{ title: "Estoque Atual", key: "inventory" },
				{ title: "Data de Validade", key: "expiration_date" },
			],
			items: [],

			snackbar: false,
			snackbarMessage: "",
			snackbarColor: "",
			snackbarTimeout: 3000,

			showImport: false,
			deleteConfirm: false,
			idDelete: null,
			dialog: false,

			showForm: false,
			itemUpdate: null,
		};
	},
	mounted() {
		this.reload();
	},
	watch: {
		deleteConfirm: function () {
			if (this.idDelete != null && this.deleteConfirm) {
				this.$api
					.del(`medicine/${this.idDelete}`)
					.then((response) => {
						if (this.idDelete >= parseInt(localStorage.getItem("last")))
							localStorage.removeItem("last");

						this.snackbar = true;
						this.snackbarMessage = "Medicamento excluído com sucesso!";
						this.snackbarColor = "success";

						this.deleteConfirm = false;
						this.idDelete = null;
						this.dialog = false;

						this.reload();
					})
					.catch((error) => {
						console.log(error, "error");
						this.snackbar = true;
						this.snackbarMessage = error.response?.data.message || error;
						this.snackbarColor = "error";
					});
			}
		},
	},
	methods: {
		onUpdated(item) {
			this.itemUpdate = item;

			this.showForm = true;
		},
		onDelete(id) {
			this.idDelete = id;

			this.dialog = true;
		},
		reload() {
			this.$api
				.get("medicine")
				.then((r) => {
					this.items = r.data.data;
					this.items.forEach((res) => {
						if (("" + res.id).substring(0, 1) != "1")
							localStorage.setItem("last", res.id);
					});
				})
				.catch((error) => {
					console.log(error, "error");
					this.snackbar = true;
					this.snackbarMessage = error.response?.data.message || error;
					this.snackbarColor = "error";
				});
		},
		closeImport() {
			this.showImport = false;
			this.reload();
		},

		closeForm() {
			this.showForm = false;
			this.itemUpdate = null;
			this.reload();
		},
		cancelDialog() {
			this.dialog = false;
		},
		ShowSnackbar(e) {
			this.snackbar = true;
			this.snackbarMessage = e.message;
			this.snackbarColor = e.color;
		},
	},
};
</script>
