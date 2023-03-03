import React from 'react';

function Error404() {
  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
    },
    errorText: {
      fontSize: '6rem',
      fontWeight: 'bold',
      color: '#dc3545',
    },
    errorMsg: {
      fontSize: '2rem',
      color: '#6c757d',
    },
    btn: {
      fontSize: '1.5rem',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      borderRadius: '5px',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.errorText}>404</h1>
        <p style={styles.errorMsg}>Sorry, the page you requested could not be found.</p>
        <a href="/" style={styles.btn}>Go Back Home</a>
      </div>
    </div>
  );
}

export default Error404;