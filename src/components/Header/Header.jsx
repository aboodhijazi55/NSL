'use client';

import React, { useEffect, useState } from 'react';
import './Header.css';
import Link from 'next/link';
function Header() {
	const [scrollPosition, setScrollPosition] = useState(false);

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
			>
				<div className='container'>
					{/* <a href="#x" className="navbar-brand">NATIONAL SPECIALIZED LABORATORY</a> */}
					<Link
						href='/'
						className='navbar-brand'
					>
						NATIONAL SPECIALIZED LABORATORY
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
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='/#Service'
									className='nav-link'
								>
									Our Service
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='/#client'
									className='nav-link'
								>
									Our Client
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='/#footer'
									className='nav-link'
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
