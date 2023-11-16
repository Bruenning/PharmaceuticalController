<template>
	<table class="container table-responsive table table-hover">
		<thead>
			<tr>
				<th
					v-for="(header, index) in headers"
					:key="index"
					:cols="header.cols"
					scope="col"
				>
					<b>{{ header.title }}</b>
				</th>
				<th scope="col" class="d-sm-table-cell">
					<b>Atualizar</b>
				</th>
				<th scope="col" class="d-sm-table-cell">
					<b><v-icon icon="mdi-delete"></v-icon></b>
				</th>
			</tr>
		</thead>
		<tbody v-if="countItems(items)">
			<tr v-for="(item, index) in items" :key="index">
				<td v-for="(header, index) in headers" :key="index">
					<slot :name="header.key" :item="item" :header="header">
						<p>{{ item[header.key] }}</p>
					</slot>
				</td>
				<td v-if="!noUpdate">
					<Vbtn
						type="button"
						color="danger"
						icon
						@click="this.$emit('update', item)"
						density="compact"
						style="margin: 0; border: none"
					>
						<v-icon size="small" icon="mdi-update"></v-icon>
					</Vbtn>
				</td>
				<td v-if="!noDelete">
					<Vbtn
						type="button"
						color="danger"
						icon
						@click="this.$emit('delete', item.id)"
						density="compact"
						style="margin: 0; border: none"
					>
						<v-icon size="small" icon="mdi-delete"></v-icon>
					</Vbtn>
				</td>
			</tr>
		</tbody>
		<tbody v-else>
			<tr>
				<p>Nenhum registro encontrado</p>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	emits: ["delete", "update"],
	props: {
		headers: {
			type: Array,
			required: true,
		},
		items: {
			type: Array,
			required: true,
		},
		noDelete: {
			type: Boolean,
			default: false,
		},
		noUpdate: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			isCols: {
				is: false,
				cols: 0,
			},
		};
	},
	methods: {
		countItems(items) {
			return items.length > 0;
		},
	},
};
</script>
