'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './dashboard.css';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
/**
 
 * Dashboard layout: app shell for logged-in users.
 * Separate from landing and auth — use dashboard.css for all dashboard styles.
 */

export default function DashboardLayout({ children }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [settingsOpen, setSettingsOpen] = useState(false);
	const pathname = usePathname();

	const selectTab = (href) => {
		const isDashboardHome = href === '/dashboard';
		const isActive = isDashboardHome
			? pathname === '/dashboard' || pathname === '/dashboard/'
			: pathname === href || pathname.startsWith(href + '/');
		return isActive ? 'var(--yellow)' : '#94a3b8';
	};

	const closeMenu = () => {
		setMenuOpen(false);
		setSettingsOpen(false);
	};

	const toggleSettings = (e) => {
		e.preventDefault();
		setSettingsOpen((o) => !o);
	};

	return (
		<div className="dashboard-layout">
			<header className="dashboard-header">
				<nav className="dashboard-nav">
					<img src="/img/favicon.png" className="dashboard-logo" alt="logo" />
					<button
						type="button"
						className="dashboard-nav-toggle"
						onClick={() => setMenuOpen((o) => !o)}
						aria-label={menuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={menuOpen}
					>
						{menuOpen ? <CloseIcon /> : <MenuIcon />}
					</button>
					<div className={`dashboard-nav-menu ${menuOpen ? 'dashboard-nav-menu--open' : ''}`}>
						<Link href="/dashboard" style={{ color: selectTab("/dashboard"), fontSize: '16px' }} onClick={closeMenu}><DashboardOutlinedIcon style={{ fontSize: '22px' }} /> Dashboard</Link>
						<Link href="/dashboard/reports" style={{ color: selectTab("/dashboard/reports"), fontSize: '16px' }} onClick={closeMenu}><SummarizeOutlinedIcon style={{ fontSize: '22px' }} /> Reports</Link>
						<Link href="/dashboard/clients" style={{ color: selectTab("/dashboard/clients"), fontSize: '16px' }} onClick={closeMenu}><Person4OutlinedIcon style={{ fontSize: '22px' }} /> Clients</Link>
						<div className={`dashboard-nav-dropdown-wrap ${settingsOpen ? 'is-open' : ''}`}>
							<button
								type="button"
								className="dashboard-nav-dropdown-trigger"
								style={{ color: selectTab("/dashboard/settings"), fontSize: '16px' }}
								onClick={toggleSettings}
								aria-expanded={settingsOpen}
								aria-haspopup="true"
							>
								<SettingsOutlinedIcon style={{ fontSize: '22px' }} /> Settings
							</button>
							<div className="dashboard-nav-dropdown">
								<Link href="/dashboard/settings/users" onClick={closeMenu}>Users</Link>

							</div>
						</div>
						<div className="dashboard-nav-back">
							<Link href="/auth/login" onClick={closeMenu}><LogoutOutlinedIcon style={{ fontSize: '22px' }} /> Logout</Link>
							<Link href="/" onClick={closeMenu} style={{ fontSize: '16px' }}>Back to site</Link>
						</div>
					</div>
				</nav>
			</header>
			<main className="dashboard-main">{children}</main>
		</div>
	);
}
