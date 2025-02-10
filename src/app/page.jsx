import React from 'react';
import Hero from '@/components/Hero';
import Articles from '@/components/Articles';
import Partners from '@/components/Partners';

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
