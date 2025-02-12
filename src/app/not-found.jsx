import React from 'react';
import styles from './404.module.css';
import Image from 'next/image';
import { img404 } from "../components/Sections/Services/img";
export default function NotFound() {
	return <div className={styles.container}>
		<div className={styles.content}>
			<h1 className={styles.title}>404</h1>
			<p className={styles.subtitle}>Oops! Page Not Found</p>
			<p className={styles.description}>
				It looks like you've stumbled upon a missing page. Let's get you back to the lab!
			</p>
			{/* <div className={styles.labEquipment}>
				<img src={img404} alt="Lab Equipment" />
			</div> */}
			<a href="/" className={styles.homeLink}>Go Back Home</a>
		</div>
	</div>
}
