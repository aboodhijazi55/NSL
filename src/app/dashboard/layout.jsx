'use client';
import Link from 'next/link';
import './dashboard.css';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
/**
 
 * Dashboard layout: app shell for logged-in users.
 * Separate from landing and auth — use dashboard.css for all dashboard styles.
 */
export default function DashboardLayout({ children }) {
	return (
		<div className="dashboard-layout">
			<aside className="dashboard-sidebar">
				{/* Add sidebar nav when you build the dashboard */}
				<nav className="dashboard-nav">
					<Link href="/dashboard"><DashboardOutlinedIcon /> Dashboard</Link>
					<Link href="/dashboard"><SummarizeOutlinedIcon /> Reports</Link>
					<Link href="/dashboard"><Person4OutlinedIcon /> Clients</Link>
					<Link href="/dashboard"><SettingsOutlinedIcon /> Settings</Link>
					<Link href="/dashboard"><LogoutOutlinedIcon /> Logout</Link>

					<Link href="/">Back to site</Link>
				</nav>
			</aside>
			<main className="dashboard-main">{children}</main>
		</div>
	);
}
