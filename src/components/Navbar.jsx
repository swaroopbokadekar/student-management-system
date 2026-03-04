import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { path: "/", label: "Dashboard" },
    { path: "/register", label: "Register" },
    { path: "/login", label: "Login" },
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.logoSection}>
          <div style={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <h1 style={styles.logoText}>Student Management System</h1>
        </div>
        
        <div style={styles.navLinks}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              style={{
                ...styles.navLink,
                ...(location.pathname === link.path ? styles.navLinkActive : {})
              }}
            >
              {link.label}
              {location.pathname === link.path && <span style={styles.activeIndicator}></span>}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
    boxShadow: '0 4px 20px rgba(30, 58, 138, 0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  logoIcon: {
    width: '48px',
    height: '48px',
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'white',
    margin: 0,
    letterSpacing: '-0.025em',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  navLink: {
    position: 'relative',
    padding: '0.75rem 1.25rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.9375rem',
    fontWeight: '500',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
  },
  navLinkActive: {
    color: 'white',
    background: 'rgba(255, 255, 255, 0.15)',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '24px',
    height: '3px',
    background: '#60a5fa',
    borderRadius: '3px 3px 0 0',
  },
};

export default Navbar;

