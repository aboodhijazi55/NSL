'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import {
	device7,
	device10,
	device12,
	device14,
} from '@/components/Sections/Services/img';

export default function TRTests() {
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
						<h1>{t('transformerOilTests')}</h1>
					</div>
					<div className='container h6'>
						<h6 className='h6'>
							<span>{t('trTestsIntroLabel')}</span> {t('trTestsIntroDesc')}
						</h6>
					</div>
					<div className='  container float-section'>
						<img
							src={device14}
							alt=''
							className=' d device1'
						/>
						<h5 className='h5'>Chemical Proparaties</h5>

						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Acidity, TAN <span>(ASTM D974 ,IEC 62021)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Moisture -Karl Fischer <span>(ASTM D1533)</span>
						</h5>
						{/* <h5><FontAwesomeIcon icon={faFlask} />
                        Rotating Pressure Vessel Oxidation Test(PRVOT) <span>(ASTM D2272)</span>
                    </h5> */}
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Degree of Polymerization of cellulose <span>(ASTM D4243)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Corrosive Sulfur <span>(IEC 62535)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Inhibitors Content -m/m % <span>(IEC 60666)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Furan Analysis <span>(ASTM D 5837)</span>
						</h5>
					</div>

					<div className='float-section'>
						<img
							src={device7}
							alt=''
							className=' d device2'
						/>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							DGA - Dissolved Gas Analyzer <span>(ASTM D3612 ,IEC 60559)</span>
						</h5>
						<p>
							Transformers are vital components in both the transmission and
							distribution of electrical power. The early detection of incipient
							faults in transformers is extremely cost effective by reducing
							unplanned outages. The most sensitive and reliable technique used
							for evaluating the health of oil filled electrical equipment is
							dissolved gas analysis (DGA)
						</p>
					</div>

					<div className=' float-section'>
						<img
							src={device12}
							alt=''
							className=' d device3'
						/>
						<h5 className='h5'>Physical Proparaties</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Flash Point <span>(ASTM D93)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Color <span>(ASTM D1500)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Density<span>(ASTM D1298 , ISO 12185)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Kinematic Viscosity <span>(ASTM D445)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Pour Point <span>(ASTM D97)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Interfacial Tension-IFT<span>(ASTM D971)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Particles counter <span>(ISO 4406)</span>
						</h5>
					</div>
					<div className='col-lg-12 float-section'>
						<img
							src={device10}
							alt=''
							className=' d device4'
						/>
						<h5 className='h5'>Electrical Proparaties</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Breakdown Voltage <span>(ASTM D877 & D1816)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Dissipation Factor Or Loss Factor @ 90C <span>(IEC 247)</span>
						</h5>
					</div>
				</div>
			</div>
		</>
	);
}
