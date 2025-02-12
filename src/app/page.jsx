'use client';

import React, { useEffect } from 'react';
import { AboutUs, Banner, Services } from '@/components';

import { usePathname } from 'next/navigation';

export default function Home() {
	const pathname = usePathname();

	useEffect(() => {
		// Function to handle scrolling to the section
		const scrollToSection = () => {
			if (window.location.hash) {
				const elementId = window.location.hash.substring(1); // Remove the `#`
				const element = document.getElementById(elementId);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}
		};

		// Scroll when the component is mounted or the hash changes
		setTimeout(scrollToSection, 0);
	}, [pathname]);

	return (
		<>
			<Banner />
			<Services />
			<AboutUs />
		</>
	);
}
