import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.password) {
      setStudents([...students, { ...formData, id: Date.now() }]);
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.grid}>
        {/* Registration Form */}
        <div style={styles.card}>
          <div style={styles.header}>
            <div style={styles.iconContainer}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
            </div>
            <h1 style={styles.title}>Create Account</h1>
            <p style={styles.subtitle}>Register a new student in the system</p>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.row}>
              <div style={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                style={styles.input}
              />
            </div>

            <button type="submit" style={styles.button}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
              Register Student
            </button>
          </form>

          <div style={styles.footer}>
            <p style={styles.footerText}>
              Already have an account?{" "}
              <Link to="/login" style={styles.loginLink}>
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Registered Students List */}
        <div style={styles.card}>
          <div style={styles.header}>
            <h2 style={styles.title2}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              Registered Students
            </h2>
            <p style={styles.subtitle}>{students.length} student{students.length !== 1 ? 's' : ''} registered</p>
          </div>

          {students.length === 0 ? (
            <div style={styles.emptyState}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <line x1="17" y1="11" x2="23" y2="11"/>
              </svg>
              <p>No students registered yet</p>
              <span>Register the first student using the form</span>
            </div>
          ) : (
            <div style={styles.studentList}>
              {students.map((student, index) => (
                <div key={student.id} style={styles.studentCard}>
                  <div style={styles.avatar}>
                    {student.firstName[0]}{student.lastName[0]}
                  </div>
                  <div style={styles.studentInfo}>
                    <h4 style={styles.studentName}>{student.firstName} {student.lastName}</h4>
                    <p style={styles.studentEmail}>{student.email}</p>
                  </div>
                  <span style={styles.badge}>Student {index + 1}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    padding: '2rem',
  },
  header: {
    marginBottom: '1.5rem',
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
    color: 'white',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  title2: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  subtitle: {
    color: '#64748b',
    fontSize: '0.9375rem',
    margin: 0,
    textAlign: 'center',
  },
  form: {},
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  formGroup: {
    marginBottom: '1.25rem',
  },
  input: {
    height: '50px',
    fontSize: '0.9375rem',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    background: '#f8fafc',
    transition: 'all 0.2s ease',
  },
  button: {
    width: '100%',
    height: '50px',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s ease',
  },
  footer: {
    textAlign: 'center',
    marginTop: '1.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #e2e8f0',
  },
  footerText: {
    color: '#64748b',
    fontSize: '0.9375rem',
    margin: 0,
  },
  loginLink: {
    color: '#10b981',
    fontWeight: '600',
    textDecoration: 'none',
  },
  emptyState: {
    textAlign: 'center',
    padding: '3rem 1rem',
    color: '#94a3b8',
  },
  studentList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxHeight: '500px',
    overflowY: 'auto',
  },
  studentCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    background: '#f8fafc',
    borderRadius: '12px',
    borderLeft: '4px solid #10b981',
    transition: 'all 0.2s ease',
  },
  avatar: {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: '0.875rem',
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    margin: '0 0 0.25rem 0',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1e293b',
  },
  studentEmail: {
    margin: 0,
    fontSize: '0.875rem',
    color: '#64748b',
  },
  badge: {
    background: 'rgba(16, 185, 129, 0.1)',
    color: '#10b981',
    padding: '0.375rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
};

export default Register;

