function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.brand}>
            <h3 style={styles.brandName}>Student Management System</h3>
            <p style={styles.brandTagline}>Empowering education through technology</p>
          </div>
          
          <div style={styles.links}>
            <div style={styles.linkGroup}>
              <h4 style={styles.linkGroupTitle}>Quick Links</h4>
              <a href="/" style={styles.link}>Dashboard</a>
              <a href="/register" style={styles.link}>Register</a>
              <a href="/login" style={styles.link}>Login</a>
            </div>
            
            <div style={styles.linkGroup}>
              <h4 style={styles.linkGroupTitle}>Contact</h4>
              <p style={styles.contactText}>support@studentmgt.com</p>
              <p style={styles.contactText}>(555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div style={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Student Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    color: 'white',
    padding: '3rem 0 1.5rem',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '2rem',
    marginBottom: '2rem',
  },
  brand: {
    maxWidth: '300px',
  },
  brandName: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: 'white',
  },
  brandTagline: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '0.9375rem',
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  linkGroup: {},
  linkGroupTitle: {
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: '1rem',
  },
  link: {
    display: 'block',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.9375rem',
    marginBottom: '0.5rem',
    transition: 'color 0.2s ease',
  },
  contactText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.9375rem',
    margin: '0 0 0.5rem 0',
  },
  copyright: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '1.5rem',
    textAlign: 'center',
  },
};

export default Footer;

