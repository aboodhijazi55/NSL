'use client';

import React, { useEffect, useState } from 'react';
import './Header.css';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

function Header() {
	const [scrollPosition, setScrollPosition] = useState(false);
	const { language, toggleLanguage, t } = useLanguage();

	useEffect(() => {
		const handleScroll = (e) => {
			if (window.scrollY >= 25) {
				setScrollPosition(true);
			} else {
				setScrollPosition(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={
					scrollPosition
						? 'navbar navbar-expand-md mb-1 bg-dark navbar-dark text-white fixed-top'
						: 'navbar navbar-expand-md bg-none navbar-dark mb-1 fixed-top navbar-scrolled'
				}
				dir={language === 'ar' ? 'rtl' : 'ltr'}
			>
				<div className='container'>
					{/* <a href="#x" className="navbar-brand">NATIONAL SPECIALIZED LABORATORY</a> */}
					<Link
						href='/'
						className='navbar-brand'
					>
						{t('brandName')}
					</Link>
					<button
						className='navbar-toggler header-button'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#mainmenu'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='mainmenu'
					>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<a
									href='/#home'
									className='nav-link'
								>
									{t('home')}
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='/#Service'
									className='nav-link'
								>
									{t('ourService')}
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='/#client'
									className='nav-link'
								>
									{t('ourClient')}
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='/#footer'
									className='nav-link'
								>
									{t('contactUs')}
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='/auth/login'
									className='nav-link'
								>
									{t('login')}
								</a>
							</li>
							<li className='nav-item'>
								<button
									onClick={toggleLanguage}
									className='btn btn-outline-light btn-sm ms-2 translate-btn'
									style={{
										minWidth: '60px',
										fontSize: '0.875rem',
										padding: '0.375rem 0.75rem'
									}}
								>
									{language === 'en' ? 'عربي' : 'EN'}
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
