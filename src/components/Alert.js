import React from 'react';

export const Alert = ({ message, type = 'primary' }) => {
    return (
        <div style={styles.container}>
            <div style={{ ...styles.alert, ...styles[type] }} role="alert">
                {message}
            </div>
        </div>
    );
}

const styles = {
    container: {
        margin: '20px auto',
        maxWidth: '600px',
        textAlign: 'center',
    },
    alert: {
        padding: '15px 20px',
        borderRadius: '5px',
        fontSize: '1.1em',
        color: '#fff',
        margin: '10px 0',
    },
    primary: {
        backgroundColor: 'var(--bs-body-color)',
    },
    success: {
        backgroundColor: '#28a745',
    },
    danger: {
        backgroundColor: '#dc3545',
    },
    warning: {
        backgroundColor: '#ffc107',
        color: '#212529', 
    },
};

export default Alert;
