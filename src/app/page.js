import Articles from '@/components/Articles';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import React from 'react';

const HomePage = () => {
	return (
		<div>
			<Hero />
			<Partners />
			<Articles />
		</div>
	);
};

export default HomePage;
