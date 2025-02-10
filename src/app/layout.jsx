import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Wolmart',
	description: 'E-Commerce shop',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
