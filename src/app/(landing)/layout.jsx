import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

/**
 * Layout for the public landing site: home, test pages, etc.
 * Uses site Header + Footer and shared landing styles (globals.css).
 */
export default function LandingLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
