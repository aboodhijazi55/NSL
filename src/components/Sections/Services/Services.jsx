'use client';

import React, { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import './Services.css';
import {
	trIcon,
	toIcon,
	fuleIcon,
	filtrationIcon,
	trImg,
	fuleImg,
	hydImg,
	fillImg,
} from './img';
import Link from 'next/link';

function Services() {
	const [activeIndex, setActiveIndex] = useState(0);
	const p = useRef();
	const { t, language } = useLanguage();

	const content = [
		{
			title: 'transformerOilTests',
			description: 'transformerOilDescription',
			buttonText: 'discoverMore',
			imgSrc: trImg,
			iconSrc: trIcon,
			link: '/trtests',
		},
		{
			title: 'lubeEngineOilTests',
			description: 'lubeEngineOilDescription',
			buttonText: 'exploreMore',
			imgSrc: hydImg,
			iconSrc: toIcon,
			link: '/lubetests',
		},
		{
			title: 'fuelTests',
			description: 'fuelTestsDescription',
			buttonText: 'moreListing',
			imgSrc: fuleImg,
			iconSrc: fuleIcon,
			link: '/fueltests',
		},
		{
			title: 'filtration',
			description: 'filtrationDescription',
			buttonText: 'discoverMore',
			imgSrc: fillImg,
			iconSrc: filtrationIcon,
			link: '/filtration',
		},
	];

	function handleTabClick(index) {
		setActiveIndex(index);
		p.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}

	return (
		<>
			<section id='Service' dir={language === 'ar' ? 'rtl' : 'ltr'}>
				<div className='popular-categories'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='section-heading'>
									<h2>{t('ourServices')}</h2>
									<h6>{t('checkThemOut')}</h6>
								</div>
							</div>
							<div className='col-lg-12'>
								<div className='naccs'>
									<div className='grid'>
										<div className='row'>
											<div className='col-lg-4'>
												<div className='menu'>
													{content.map((item, index) => (
														<div
															key={item.title}
															className={`thumb ${activeIndex === index ? 'active' : ''
																}`}
															onClick={() => handleTabClick(index)}
														>
															<span className='icon'>
																<img
																	src={item.iconSrc}
																	alt=''
																/>
															</span>
															{t(item.title)}
														</div>
													))}
												</div>
											</div>
											<div
												className='col-lg-8 align-self-center'
												ref={p}
											>
												<ul className='nacc'>
													{content.map((item, index) => (
														<li
															key={index}
															className={`${activeIndex === index ? 'active' : ''
																}`}
														>
															<div>
																<div className='thumb'>
																	<div className='row'>
																		<div className='col-lg-5 align-self-center'>
																			<div className='left-text'>
																				<h4>{t(item.title)}</h4>
																				<p>{t(item.description)}</p>
																				<button
																					type='button'
																					className='btn btn-outline-light'
																				>
																					<Link
																						href={item.link}
																						className='white-link'
																					>
																						{t('readMore')}
																					</Link>
																				</button>
																			</div>
																		</div>
																		<div className='col-lg-7 align-self-center'>
																			<div className='right-image'>
																				<img src={item.imgSrc} as="image" />
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Services;
