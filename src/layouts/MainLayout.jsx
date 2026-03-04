import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div style={styles.layout}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.container}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    padding: '2rem',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
};

export default MainLayout;

