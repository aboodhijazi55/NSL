import './styles/globals.css';

import { Quicksand } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ClientLayout from '@/components/ClientLayout';

const quicksand = Quicksand({
	variable: '--font-quicksand',
	subsets: ['latin'],
});

/**
 * Root layout: global styles, fonts, and providers only.
 * Header/Footer are in (landing)/layout.jsx. Auth and dashboard use their own layouts.
 */
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='description'
					content='National Specialized laboratory in Jordan,  مختبر متخصص في فحص الزيوت المعدنيه, الوقود وزيوت التشحيم وذلك لضمان موثوقية المحولات والمعدات وطول عمرها.'
				/>
				<meta
					name='keywords'
					content='NSL,nsl,National Specialized Laboratories,فحص زيوت المحولات ,الوطنية المتخصصة للمختبرات ,الوطنيه المتخصصه للمختبرات ,فصح زيوت المحولات في الأردن , transformer oil test '
				/>
				<meta
					name='author'
					content='NSL - الوطنية المتخصصة للمختبرات'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link
					rel='manifest'
					href='/site.webmanifest'
				/>
				<title>NSL - الوطنية المتخصصة للمختبرات</title>
				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
					rel='stylesheet'
					integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH'
					crossOrigin='anonymous'
				/>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@434&display=swap'
					rel='stylesheet'
				/>

				<link
					href='https://fonts.googleapis.com/css2?family=Italianno&family=Quicksand:wght@300..700&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body className={`${quicksand.variable}`}>
				<LanguageProvider>
					<ClientLayout>
						{children}
					</ClientLayout>
				</LanguageProvider>
				<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></script>
			</body>
		</html>
	);
}
