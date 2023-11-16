<template>
	<Bmodal
		@close="close()"
		id="medicineImport"
		title="Importando Medicamento"
		icon="upload"
		:show="show"
	>
		<Vform>
			<Vrow>
				<Vcol :cols="12">
					<Vfile
						type="file"
						v-model="file"
						id="formFile"
						label="file"
						class="input"
						icon="file-upload"
						@change="importFile"
						placeholder="Select your CSV files"
						accept="text/csv"
					></Vfile>
				</Vcol>
			</Vrow>
		</Vform>
	</Bmodal>
</template>

<script>
export default {
	props: {
		show: Boolean,
	},
	emits: ["close"],

	data() {
		return {
			file: null,
		};
	},
	methods: {
		importFile(e) {
			let file = e.target.files || e.dataTransfer.files;
			if (!file.length) return;

			new Promise((resolve, reject) => {
				let reader = new FileReader();

				reader.onload = (e) => {
					resolve((this.fileinput = reader.result));
				};
				reader.readAsText(file[0]);
			}).then(
				(result) => {
					let lines = this.fileinput.split("\n");
					let header = [
						"id",
						"nameMedicine",
						"category",
						"price",
						"inventory",
						"expiration_date",
					];

					let output = lines.slice(1).map((line) => {
						let fields = line.split(",");
						return Object.fromEntries(header.map((h, i) => [h, fields[i]]));
					});

					let fileOutput = this.collect();
					this.collect(output)
						.filter((items) => items.id > 0)
						.each((items) => {
							items["id"] = parseInt(items["id"]);
							items["price"] = parseFloat(items["price"]);
							items["inventory"] = parseInt(items["inventory"]);

							fileOutput.push(items);
						});

					this.$api.post("medicine", JSON.stringify(fileOutput)).then((res) => {
						this.collect(res.data.data).each((r) => {
							this.$emit("snack", {
								message:
									r?.original?.message || "Os Medicamentos importados",
								color: "success",
							});
						});

						this.close();
					});
				},
				(error) => {
					console.error(error);
				}
			);
		},
		close() {
			this.file = null;

			this.$emit("close");
		},
	},
};
</script>
