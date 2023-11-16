<template>
	<Bmodal
		@close="close()"
		id="medicineForm"
		title="Importando Medicamento"
		:show="show"
		icon="pill"
		:itemForm="itemUpdate"
	>
		<Vform>
			<Vrow>
				<Vcol>
					<Vinput
						v-model="form.nameMedicine"
						label="Nome do medicamento"
						:rules="rules.nameMedicine"
						icon="rename"
				/></Vcol>

				<Vcol>
					<Vinput
						v-model="form.category"
						label="Categoria"
						:rules="rules.category"
						return-masked-value
						icon="pill"
				/></Vcol>

				<Vcol>
					<Vinput
						v-model="form.price"
						type="number"
						label="Preço (R$)"
						:rules="rules.price"
						return-masked-value
						icon="currency-brl"
				/></Vcol>

				<Vcol>
					<Vinput
						v-model="form.inventory"
						type="number"
						label="Estoque Atual"
						:rules="rules.inventory"
						icon="store-outline"
				/></Vcol>

				<Vcol>
					<Vinput
						v-model="form.expiration_date"
						type="date"
						label="Data de Validade"
						:rules="rules.expiration_date"
						icon="calendar-text"
				/></Vcol>
			</Vrow>
		</Vform>
		<template v-slot:footer>
			<Vbtn color="primary" @click="SaveUpdate">{{
				form.id ? "alterar" : "Salvar"
			}}</Vbtn>
		</template>
	</Bmodal>
</template>
<script>
export default {
	props: {
		show: Boolean,
		itemUpdate: Object,
	},
	emits: ["close"],
	data() {
		return {
			form: {
				id: null,
				nameMedicine: null,
				category: null,
				price: null,
				inventory: null,
				expiration_date: null,
			},

			rules: {
				nameMedicine: [
					(v) => !!v || "Nome do medicamento é obrigatório",
					(v) =>
						(!!v && this.collect(v).count() <= 255) ||
						"Nome do medicamento deve ter no máximo 255 caracteres",
				],
				category: [
					(v) => !!v || "Categoria é obrigatório",
					(v) =>
						(!!v && this.collect(v).count() <= 255) ||
						"Categoria deve ter no máximo 255 caracteres",
				],
				price: [(v) => !!v || "Preço é obrigatório"],
				inventory: [(v) => !!v || "estoque é obrigatório"],
			},
		};
	},
	watch: {
		show: function (e) {
			if (e && this.itemUpdate) {
				this.form = {
					id: this.itemUpdate.id,
					nameMedicine: this.itemUpdate.nameMedicine,
					category: this.itemUpdate.category,
					price: this.itemUpdate.price,
					inventory: this.itemUpdate.inventory,
					expiration_date: this.itemUpdate.expiration_date,
				};
			}
		},
	},
	methods: {
		SaveUpdate() {
			if (this.form.id) this.update();
			else this.save();
		},
		close() {
			this.form = {
				id: null,
				nameMedicine: null,
				category: null,
				inventory: null,
				price: null,
				expiration_date: null,
			};

			this.$emit("close");
		},
		save() {
			let form = {
				id: localStorage.getItem("last")
					? parseInt(localStorage.getItem("last")) + 1
					: 200000,
				nameMedicine: this.form.nameMedicine,
				category: this.form.category,
				price: parseFloat(this.form.price),
				inventory: parseInt(this.form.inventory),
				expiration_date: this.form.expiration_date,
			};

			this.$api.post("medicine", JSON.stringify([form])).then((res) => {
				this.$emit("snack", {
					message:
						"Medicamento criado, caso o Medicamento já exista os valores foram altados para o utimo digitado",
					color: "success",
				});
				this.close();
			});
		},
		update() {
			let form = {
				id: parseInt(this.form.id),
				nameMedicine: this.form.nameMedicine,
				category: this.form.category,
				price: parseFloat(this.form.price),
				inventory: parseInt(this.form.inventory),
				expiration_date: this.form.expiration_date,
			};

			this.$api.put(`medicine/${form.id}`, form).then((res) => {
				console.log(res);
				this.$emit("snack", {
					message: "Medicamento Alterado",
					color: "success",
				});
				this.close();
			});
		},
	},
};
</script>
