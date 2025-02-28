import Articles from '@/components/Articles';
import Checkout from '@/components/checkout';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import React from 'react';

const HomePage = () => {
	return (
		<div>
			<Hero />
			<Partners />
			<Articles />
			<Checkout />
		</div>
	);
};
export default HomePage;
