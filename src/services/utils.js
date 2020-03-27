export function countData(items, name) {
	let obj = {}
	items.forEach((item, i) => {
		obj[item[name]] = (obj[item[name]] || 0) + 1
	})
	return obj
}

export function itemsReducer(data) {
	return Object.entries(data)
		.map(([key, value]) => {
			return {
				name: key,
				count: value
			}
		})
		.sort((a, b) => (a.count < b.count ? 1 : -1))
}
