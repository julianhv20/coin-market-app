import React from 'react';
import { CoinRow } from './CoinRow';

const titles = ['#', 'Coin', 'Price', 'Price Change (%)', '24h Volume'];

export function TableCoins({ coins, search }) {
	const filteredCoins = coins.filter(
		(coin) =>
			coin.name.toLowerCase().includes(search.toLowerCase()) ||
			coin.symbol.toLowerCase().includes(search.toLowerCase())
	);

	if (!coins) return <div>No coins</div>;

	return (
		<div class="table-responsive-md">
			<table className="table table-dark mt-4 table-hover table-striped">
				<thead>
					<tr>
						{titles.map((title, i) => (
							<td key={i}>{title}</td>
						))}
					</tr>
				</thead>
				<tbody>
					{filteredCoins.map((coin, index) => (
						<CoinRow coin={coin} key={index} index={index + 1} />
					))}
				</tbody>
			</table>
		</div>
	);
}
