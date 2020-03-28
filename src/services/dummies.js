export function getSummary() {
	return Promise.resolve({
		active: 34,
		cases: 500,
		casesPerOneMillion: 6,
		critical: 6,
		deaths: 450,
		recovered: 10,
		todayCases: 0,
		todayDeaths: 4
	})
}

export function getDetails() {
	return new Promise(res => {
		setTimeout(
			() =>
				res({
					cases: [
						{
							case: 1,
							resident_of: '?',
							facility: 'abc',
							sex: 'M',
							age: 20
						},
						{
							case: 2,
							resident_of: 'sample',
							facility: 'ghhhfff',
							sex: 'M',
							age: 30
						},
						{
							case: 3,
							resident_of: 'samprle',
							facility: 'abc',
							sex: 'M',
							age: 40
						},
						{
							case: 4,
							resident_of: 'samprle',
							facility: 'abc',
							sex: 'M',
							age: 50
						},
						{
							case: 5,
							resident_of: 'sample',
							facility: 'dffdd',
							sex: 'F',
							age: 61
						},
						{
							case: 6,
							resident_of: 'sampdfdfle',
							facility: 'dffdd',
							sex: 'F',
							age: 61
						},
						{
							case: 7,
							resident_of: 'samdfdple',
							facility: 'ddfdfd',
							sex: 'F',
							age: 61
						},
						{
							case: 8,
							resident_of: 'samgfgple',
							facility: 'ddggd',
							sex: 'F',
							age: 61
						},
						{
							case: 9,
							resident_of: 'samfgple',
							facility: 'dgdd',
							sex: 'F',
							age: 61
						},
						{
							case: 10,
							resident_of: 'samfffgple',
							facility: 'dgffdd',
							sex: 'F',
							age: 61
						},
						{
							case: 11,
							resident_of: 'samfgphhle',
							facility: 'dgnndd',
							sex: 'F',
							age: 61
						}
					]
				}),
			2000
		)
	})
}
