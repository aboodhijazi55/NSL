
'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';


export default function Filtration() {
	const { t } = useLanguage();
	return (
		<>
			<div className='test-banner'>
				<img
					src='https://res.cloudinary.com/di0a0utla/image/upload/v1739274711/nsl/ltpe1iakxejludbqul33.jpg'
					alt=''
					className='bac-test'
				/>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='top-text header-text'>
								<h1>NSL</h1>
								<h6>{t('bannerText')}</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container test'>
				<div className='row'>
					<div className='container h1'>
						<h1>{t('filtration')}</h1>
					</div>
					<div className='container h6'>
						<h6 className='h6'>
							<span>{t('filtration')}</span> {t("is a critical maintenance process to ensure the efficiency and reliability of power transformers. It involves removing impurities, moisture, sludge, and dissolved gases that can degrade the oil&apos;s insulating and cooling properties. By restoring the oil&apos;s dielectric strength and thermal stability, filtration helps prevent electrical failures, reduces the risk of overheating, and extends the transformer&apos;s service life. Regular filtration is essential for minimizing downtime and maintaining safe and efficient operation of electrical systems service life. Regular filtration is essential for minimizing downtime and maintaining safe and efficient operation of electrical systems")}
						</h6>

						<h5>{t('contactUs')}</h5>
					</div>
				</div>
			</div>
		</>
	);
}
