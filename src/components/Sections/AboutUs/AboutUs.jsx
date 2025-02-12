import React from 'react';
import './AboutUs.css';
import { aboutImg, lab1, lab2, lab3, lab4, lab5 } from '../Services/img';
import {
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
	img18,
	img19,
	img20,
} from '../Services/img';
import Image from 'next/image';

function AboutUs() {
	return (
		<>
			<div className='recent-listing'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='section-heading'>
								<h2>About Us</h2>
							</div>
							<div className='container img-carousel'>
								<div
									id='carouselExampleInterval'
									className='carousel slide'
									data-bs-ride='carousel'
								>
									<div className='carousel-inner'>
										<div
											className='carousel-item active'
											data-bs-interval='4000'
										>
											<img
												src={aboutImg}
												className='d-block w-100 h-8'
												alt='...'
											/>
										</div>
										<div
											className='carousel-item'
											data-bs-interval='2000'
										>
											<img
												src={lab1}
												className='d-block w-100'
												alt='...'
											/>
										</div>
										<div className='carousel-item'
											data-bs-interval='2000'
										>
											<img
												src={lab2}
												className='d-block w-100'

												alt='...'
											/>

										</div>
										<div className='carousel-item'
											data-bs-interval='2000'
										>
											<img
												src={lab3}
												className='d-block w-100'

												alt='...'
											/>
										</div>
										<div className='carousel-item'
											data-bs-interval='2000'
										>
											<img
												src={lab4}
												className='d-block w-100'

												alt='...'
											/>
										</div>
										<div className='carousel-item'
											data-bs-interval='2000'
										>
											<img
												src={lab5}
												className='d-block w-100'

												alt='...'
											/>
										</div>
									</div>
									<button
										className='carousel-control-prev'
										type='button'
										data-bs-target='#carouselExampleInterval'
										data-bs-slide='prev'
									>
										<span
											className='carousel-control-prev-icon'
											aria-hidden='true'
										></span>
										<span className='visually-hidden'>Previous</span>
									</button>
									<button
										className='carousel-control-next'
										id='client'
										type='button'
										data-bs-target='#carouselExampleInterval'
										data-bs-slide='next'
									>
										<span
											className='carousel-control-next-icon'
											aria-hidden='true'
										></span>
										<span className='visually-hidden'>Next</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container '>
				<div className='section-heading logo-section'>
					<h2>Our Client</h2>
				</div>

				<div className='logos'>
					<div className='logos-slide'>
						<img src={img1} />
						<img src={img2} />
						<img src={img3} />
						<img src={img20} />
						<img src={img4} />
						<img src={img5} />
						<img src={img6} />
						<img src={img7} />
						<img src={img8} />
						<img src={img9} />
						<img src={img10} />
						<img src={img11} />
						<img src={img12} />
						<img src={img13} />
						<img src={img14} />
						<img src={img15} />
						<img src={img16} />
						<img src={img17} />
						<img src={img18} />
						<img src={img19} />
					</div>

					<div className='logos-slide'>
						<img src={img1} />
						<img src={img2} />
						<img src={img3} />
						<img src={img20} />
						<img src={img4} />
						<img src={img5} />
						<img src={img6} />
						<img src={img7} />
						<img src={img8} />
						<img src={img9} />
						<img src={img10} />
						<img src={img11} />
						<img src={img12} />
						<img src={img13} />
						<img src={img14} />
						<img src={img15} />
						<img src={img16} />
						<img src={img17} />
						<img src={img18} />
						<img src={img19} />
						<img src={img1} />
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutUs;
