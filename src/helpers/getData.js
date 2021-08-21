import axios from 'axios';

export async function getData(setCoins) {
	try {
		const response = await axios.get(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
		);
		setCoins(response.data);
	} catch (error) {
		alert(error);
	}
}
