'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '@/contexts/LanguageContext';
import {
	device4,
	device6,
	device8,
	device9,
	device12,
	device13,
	device14,
	device15,
	device16,
	device18,
} from '@/components/Sections/Services/img';



export default function FuelTests() {
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
						<h1>{t('fuelTests')}</h1>
					</div>
					<div className='container h6'>
						<h6 className='h6'>
							<span>{t('fuelTestsIntroLabel')}</span> {t('fuelTestsIntroDesc')}
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
							Acidity <span>(ASTM D974 ,IEC 62021)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Water by distillation <span>(ASTM D95)</span>
						</h5>

						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Ash content <span>(ASTM D482)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Calorific value Net <span>(ASTM D240)</span>
						</h5>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							Sulfur Content <span>(ASTM D4294)</span>
						</h5>
					</div>

					<div className='float-section'>
						<img
							src={device18}
							alt=''
							className=' d device2'
						/>
						<h5>
							<FontAwesomeIcon icon={faFlask} />
							AAS - Atomic Absorption Spectroscopy <span>(ASTM D5863)</span>
						</h5>
						<p>
							Atomic Absorption Spectroscopy (AAS) is a precise analytical
							technique used in fuel testing to detect and quantify trace metals
							such as iron, nickel, vanadium, and sodium. These metals can
							impact fuel quality and lead to corrosion, deposits, or equipment
							damage. AAS ensures accurate monitoring of metal content, helping
							to assess fuel compliance with standards and optimize its
							performance. This method is essential for maintaining the
							efficiency and reliability of engines and industrial systems.
						</p>
					</div>

					<div className=' float-section'>
						<img
							src={device9}
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
					</div>
					<div className='img-section'>
						<img
							src={device4}
							alt=''
						/>
						<img
							src={device6}
							alt=''
						/>
						<img
							src={device8}
							alt=''
						/>
						<img
							src={device12}
							alt=''
						/>
						<img
							src={device13}
							alt=''
						/>
						<img
							src={device15}
							alt=''
						/>
						<img
							src={device16}
							alt=''
						/>
					</div>
					{/* <div className="col-lg-12 float-section">

                    <img src={device10} alt="" className=' d device4' />
                    <h5 className='h5'>Electrical Proparaties</h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Breakdown Voltage <span>(ASTM D877 & D1816)</span>
                    </h5>
                    <h5><FontAwesomeIcon icon={faFlask} />
                        Dissipation Factor Or Loss Factor @ 90C <span>(IEC 247)</span>
                    </h5>
                </div> */}
				</div>
			</div>
		</>
	);
}
