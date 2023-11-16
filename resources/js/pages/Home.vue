<template>
    <v-form class="d-flex justify-content-center">
        <!-- <input id="formFile" type="file" placeholder="Select your CSV files" accept="text/csv" name="formfile" @change="teste"/> -->
        <v-file-input v-model="file" id="formFile" label="file" class="input" @change="teste" placeholder="Select your CSV files" accept="text/csv" ></v-file-input>
    </v-form>
</template>

<script>

export default {
    data(){
        return {
            file:null
        }
    },
    methods: {
        teste(e) {
            let file = e.target.files || e.dataTransfer.files
            if (!file.length) return;

            new Promise((resolve, reject) => {
                let reader = new FileReader()

                reader.onload = e => {
                    resolve((this.fileinput = reader.result))
                }
                reader.readAsText(file[0])
            }).then(result => {
                    let lines = this.fileinput.split('\n')
                    let header = [
                        "ID",
                        "Nome_do_Medicamento",
                        "Categoria",
                        "Preço",
                        "Estoque_Atual",
                        "Data_de_Validade"
                ]

                    let output = lines.slice(1).map(line => {
                        let fields = line.split(',')
                        return Object.fromEntries(header.map((h, i) => [h, fields[i]]))
                    })

                    let fileOutput = this.collect();
                    this.collect(output).filter((items) => items.ID > 0).each((items) => {
                        items["ID"] = parseInt(items["ID"])
                        items["Preço"] = parseFloat(items["Preço"])
                        items["Estoque_Atual"] = parseInt(items["Estoque_Atual"])

                        fileOutput.push(items)
                    })
                    console.log(fileOutput)

                    this.$api.post("medicine", JSON.stringify(fileOutput)).then(res => {
                        console.log(res)
                    })
                },
                error => {
                    console.error(error)
                }
            )
        }
    }
}
</script>
