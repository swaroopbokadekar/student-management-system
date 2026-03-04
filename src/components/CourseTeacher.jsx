import { useState, useEffect } from "react";

function CourseTeacher() {
  const [course, setCourse] = useState("");
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    if (course === "") {
      setTeacher(null);
      return;
    }

    // Simulated backend data
    const teacherData = {
      Java: { name: "Mr. Sharma", experience: "8 years", specialization: "OOPS, Spring Boot" },
      Python: { name: "Ms. Priya", experience: "5 years", specialization: "Django, ML" },
      React: { name: "Mr. Arjun", experience: "6 years", specialization: "React, Redux" },
      "Data Science": { name: "Dr. Smith", experience: "10 years", specialization: "ML, AI" },
      "Web Dev": { name: "Ms. Johnson", experience: "4 years", specialization: "HTML, CSS, JS" }
    };

    setTeacher(teacherData[course]);
  }, [course]);

  const courses = [
    { value: "", label: "-- Select Course --" },
    { value: "Java", label: "Java Programming" },
    { value: "Python", label: "Python Programming" },
    { value: "React", label: "React Development" },
    { value: "Data Science", label: "Data Science" },
    { value: "Web Dev", label: "Web Development" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.selectWrapper}>
        <label style={styles.label}>Select a Course</label>
        <div style={styles.selectContainer}>
          <svg style={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
          <select 
            value={course} 
            onChange={(e) => setCourse(e.target.value)}
            style={styles.select}
          >
            {courses.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
      </div>

      {teacher && (
        <div style={styles.teacherCard}>
          <div style={styles.teacherHeader}>
            <div style={styles.teacherAvatar}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <h3 style={styles.teacherName}>{teacher.name}</h3>
              <span style={styles.badge}>Course Instructor</span>
            </div>
          </div>
          
          <div style={styles.teacherDetails}>
            <div style={styles.detailItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>{teacher.experience} of experience</span>
            </div>
            <div style={styles.detailItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
              <span>{teacher.specialization}</span>
            </div>
          </div>
        </div>
      )}

      {!teacher && course === "" && (
        <div style={styles.emptyState}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
          <p>Select a course to view instructor details</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  selectWrapper: {},
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#64748b',
    marginBottom: '0.5rem',
  },
  selectContainer: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
    zIndex: 1,
  },
  select: {
    width: '100%',
    height: '50px',
    paddingLeft: '3rem',
    fontSize: '0.9375rem',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    background: '#f8fafc',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1rem center',
    backgroundSize: '1rem',
  },
  teacherCard: {
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    border: '1px solid #bae6fd',
    borderRadius: '12px',
    padding: '1.5rem',
    animation: 'fadeIn 0.3s ease-out',
  },
  teacherHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  teacherAvatar: {
    width: '56px',
    height: '56px',
    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  teacherName: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0 0 0.25rem 0',
  },
  badge: {
    background: '#2563eb',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '500',
  },
  teacherDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#64748b',
    fontSize: '0.9375rem',
  },
  emptyState: {
    textAlign: 'center',
    padding: '2rem',
    color: '#94a3b8',
    background: '#f8fafc',
    borderRadius: '12px',
    border: '1px dashed #e2e8f0',
  },
};

export default CourseTeacher;

