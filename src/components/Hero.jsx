import React from 'react';
import OnePage from './pixl/OnePage';
import TwoPage from './pixl/TwoPage';

export default function Hero() {
	return (
		<div className='w-full'>
			<div className='p-10 '>
				<OnePage />
				<TwoPage />
			</div>
		</div>
	);
}
