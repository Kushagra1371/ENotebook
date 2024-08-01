import React from 'react';

const About = () => { 
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>About Notes App</h1>
            <p style={styles.text}>
                Welcome to the Notes App! This application allows you to add, delete, read, and update notes 
                created by you. You can create your account using a username and a password, and log in later 
                using your credentials to manage your notes as per your needs.
            </p>
            <p style={styles.text}>
                The app is developed by <strong>Kushagra Yadav</strong>.
            </p>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        backgroundColor: '#f9f9f9',  // Light grey background
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: '2em',
        color: '#333',  // Dark grey color for the heading
        marginBottom: '10px',
        textAlign: 'center',
    },
    text: {
        fontSize: '1.2em',
        color: '#555',  // Medium grey color for the text
    }
};

export default About;
