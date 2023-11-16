<!--component input using vuetify e validate-->
<template>
	<v-file-input
		:prepend-icon="`mdi-${icon}`"
		:color="color"
		:label="Nome"
		:rules="rules"
	></v-file-input>
</template>

<script>
export default {
	emits: ["update:rules"],
	props: {
		icon: {
			type: String,
			default: "account",
		},
		color: {
			type: String,
			default: "primary",
		},
		Nome: {
			type: String,
			default: "Nome",
		},
		rules: {
			type: Array,
			default: () => [],
		},
	},
	watch: {
		rules: {
			handler() {
				this.$emit("update:rules", this.rules);
			},
			deep: true,
		},
	},
	methods: {},
};
</script>
