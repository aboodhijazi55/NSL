'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumb.module.css';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
/**
 * Breadcrumb: main title on the left with accent underline, breadcrumb trail on the right.
 * Props:
 *   pageTitle - main heading (e.g. "Workflow")
 *   breadcrumbItems - optional array of { label, href?, active? }. If omitted, builds from pathname.
 *   icon, onMenuClick - optional, for future use
 */
export default function Breadcrumb({
    pageTitle,
    icon,
    onMenuClick,
    breadcrumbItems,
    ...rest
}) {
    const pathname = usePathname();

    const items = breadcrumbItems ?? buildItemsFromPath(pathname, pageTitle);

    return (
        <div className={styles.breadcrumbHeader} style={{ display: 'Flex', alignItems: 'center' }}>
            <div className={styles.breadcrumbTitleBlock}>
                <h1 className={styles.pageTitle}>
                    {onMenuClick && (
                        <button
                            type="button"
                            className={styles.menuToggle}
                            onClick={onMenuClick}
                            aria-label="Toggle menu"
                        >
                            ☰
                        </button>
                    )}
                    {pageTitle}
                    {icon && <span className={styles.titleIcon}>{icon}</span>}
                </h1>
                <hr className={styles.titleUnderline} aria-hidden />
            </div>
            <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
                <ol className={styles.breadcrumbList}>
                    {items.map((item, index) => (
                        <li key={index} className={styles.breadcrumbItem}>
                            {item.active ? (
                                <span className={styles.breadcrumbCurrent}>{item.label}</span>
                            ) : item.href ? (
                                <Link href={item.href} className={styles.breadcrumbLink}>
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={styles.breadcrumbCurrent}>{item.label}</span>
                            )}
                            {index < items.length - 1 && (
                                <span className={styles.separator} aria-hidden> <ArrowForwardIosOutlinedIcon style={{ fontSize: '12px' }} /> </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
}

function buildItemsFromPath(pathname, pageTitle) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
        return [{ label: 'Home', active: true }];
    }
    const items = [{ label: 'Home', href: '/' }];
    let path = '';
    for (let i = 0; i < segments.length; i++) {
        path += `/${segments[i]}`;
        const isLast = i === segments.length - 1;
        items.push({
            label: isLast ? pageTitle : formatSegment(segments[i]),
            href: isLast ? undefined : path,
            active: isLast,
        });
    }
    return items;
}

function formatSegment(segment) {
    return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
}
