import { useState } from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';

// const countryOptions = [
// 	{ value: 'BND', text: 'BND' },
// 	{ value: 'USD', text: 'USD' },
// 	{ value: 'CAD', text: 'CAD' },
// ];

const key = config.API_ACCESS_KEY;

export const Convert = () => {
	const [amount, setAmount] = useState(0);

	return (
		<div>
			<CurrencyTextField
				label="USD"
				value={amount}
				currencySymbol="$"
				digitGroupSeparator=","
				onChange={(_, value: number) => setAmount(value)}
			/>
			<CurrencyTextField
				label="JPY"
				currencySymbol="￥"
				digitGroupSeparator=","
			/>
		</div>
	);
};
