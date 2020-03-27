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
							currently_at: 'abc',
							sex: 'M',
							age: 20
						},
						{
							case: 2,
							resident_of: 'sample',
							currently_at: 'ghhhfff',
							sex: 'M',
							age: 30
						},
						{
							case: 3,
							resident_of: 'samprle',
							currently_at: 'abc',
							sex: 'M',
							age: 40
						},
						{
							case: 4,
							resident_of: 'samprle',
							currently_at: 'abc',
							sex: 'M',
							age: 50
						},
						{
							case: 5,
							resident_of: 'sample',
							currently_at: 'dffdd',
							sex: 'F',
							age: 61
						},
						{
							case: 6,
							resident_of: 'sampdfdfle',
							currently_at: 'dffdd',
							sex: 'F',
							age: 61
						},
						{
							case: 7,
							resident_of: 'samdfdple',
							currently_at: 'ddfdfd',
							sex: 'F',
							age: 61
						},
						{
							case: 8,
							resident_of: 'samgfgple',
							currently_at: 'ddggd',
							sex: 'F',
							age: 61
						},
						{
							case: 9,
							resident_of: 'samfgple',
							currently_at: 'dgdd',
							sex: 'F',
							age: 61
						},
						{
							case: 10,
							resident_of: 'samfffgple',
							currently_at: 'dgffdd',
							sex: 'F',
							age: 61
						},
						{
							case: 11,
							resident_of: 'samfgphhle',
							currently_at: 'dgnndd',
							sex: 'F',
							age: 61
						}
					]
				}),
			2000
		)
	})
}
