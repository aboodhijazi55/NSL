'use client';

import React, { useRef, useState } from 'react';
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

const content = [
	{
		title: 'Transformer Oil Tests',
		description:
			'Transformer oil testing is a critical process in ensuring the reliability and longevity of power transformers. This specialized test evaluates the quality and performance of the insulating oil used in transformers, which plays a vital role in cooling and electrical insulation.',
		buttonText: 'Discover More',
		imgSrc: trImg,
		iconSrc: trIcon,
		link: '/trtests',
	},
	{
		title: 'Lube & Engine Oil Tests',
		description:
			'Lube oil testing is an essential process for monitoring the performance and condition of lubricating oils used in machinery and engines.',
		buttonText: 'Explore More',
		imgSrc: hydImg,
		iconSrc: toIcon,
		link: '/lubetests',
	},
	{
		title: 'Fuel Tests',
		description:
			'Fuel testing ensures the quality and performance of fuels like diesel, gasoline, and kerosene. It analyzes key properties such as density, viscosity, flash point, and contaminants to ensure compliance with standards. Regular testing helps optimize efficiency, prevent engine issues, and reduce emissions.',
		buttonText: 'More Listing',
		imgSrc: fuleImg,
		iconSrc: fuleIcon,
		link: '/fueltests',
	},
	{
		title: 'Filtration',
		description:
			'we are professional due to the long experience in this field. Vacuuming Transformer before filling, fill under vacuum. purifay and treat oil from contamination, humidity and degassing.',
		buttonText: 'Discover More',
		imgSrc: fillImg,
		iconSrc: filtrationIcon,
		link: '/filtration',
	},
];

function Services() {
	const [activeIndex, setActiveIndex] = useState(0);
	const p = useRef();

	function handleTabClick(index) {
		setActiveIndex(index);
		p.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}

	return (
		<>
			<section id='Service'>
				<div className='popular-categories'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='section-heading'>
									<h2>Our Services</h2>
									<h6>Check Them Out</h6>
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
															{item.title}
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
																				<h4>{item.title}</h4>
																				<p>{item.description}</p>
																				<button
																					type='button'
																					className='btn btn-outline-light'
																				>
																					<Link
																						href={item.link}
																						className='white-link'
																					>
																						Read More
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
