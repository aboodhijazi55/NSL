'use client';

import Breadcrumb from '@/components/layout/Breadcrumb';
import TransCards from '@/components/layout/TransCards';
export default function DashboardPage() {
	return (
		<div className="dashboard-page">
			<Breadcrumb
				pageTitle="Dashboard"
				breadcrumbItems={[
					{ label: 'Home', href: '/dashboard' },
					{ label: 'Dashboard', active: true },
				]}
			/>
			<TransCards />
		</div>
	);
}
