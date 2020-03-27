export function getSummary() {
	return fetch('https://coronavirus-19-api.herokuapp.com/countries/philippines')
		.then(res => res.json())
		.then(res => res)
}

export function getDetails() {
	return fetch(
		'https://script.googleusercontent.com/macros/echo?user_content_key=-kwVW7BuveuoViMqwLsEzRaaTDY6rxeZDvs2u2fpIUZXFzEjvP38dZ_FbGVNjNS2pizHwXuE_6sUjVIqReqmG3DRm4X-NWlxm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOyzPbKWSWE_h139iwIxgQYtV_TS2E67zS3LHM8sQncMotTUj__DWW11eskKop1cncoWmTPY7kU-&lib=MKQgDcZaAxVs_oqE4EalsP50HoyiQ4Aw0'
	)
		.then(res => res.json())
		.then(res => res)
}
