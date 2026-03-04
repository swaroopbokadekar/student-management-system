import CourseTeacher from "../components/CourseTeacher";

function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Student Dashboard</h1>
        <p style={styles.subtitle}>Manage courses and view teacher assignments</p>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div style={styles.statContent}>
            <h3 style={styles.statNumber}>150</h3>
            <p style={styles.statLabel}>Total Students</p>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={{...styles.statIcon, background: 'rgba(16, 185, 129, 0.1)', color: '#10b981'}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <div style={styles.statContent}>
            <h3 style={styles.statNumber}>12</h3>
            <p style={styles.statLabel}>Active Courses</p>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={{...styles.statIcon, background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b'}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div style={styles.statContent}>
            <h3 style={styles.statNumber}>8</h3>
            <p style={styles.statLabel}>Teachers</p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/>
              <polyline points="2 17 12 22 22 17"/>
              <polyline points="2 12 12 17 22 12"/>
            </svg>
            Course & Teacher Management
          </h2>
        </div>
        <CourseTeacher />
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: '0',
  },
  header: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#64748b',
    margin: 0,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  statCard: {
    background: 'white',
    borderRadius: '16px',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.2s ease',
  },
  statIcon: {
    width: '56px',
    height: '56px',
    background: 'rgba(37, 99, 235, 0.1)',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2563eb',
  },
  statContent: {},
  statNumber: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0 0 0.25rem 0',
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#64748b',
    margin: 0,
  },
  section: {
    background: 'white',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  },
  sectionHeader: {
    marginBottom: '1.5rem',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1e293b',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
};

export default Home;

