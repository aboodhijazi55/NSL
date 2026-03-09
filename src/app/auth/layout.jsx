/**
 * Auth layout: login, register, forgot password, etc.
 * No site Header/Footer — each auth page has its own styles (e.g. login.css).
 */
export default function AuthLayout({ children }) {
	return <div className="auth-layout">{children}
	</div>;
}
