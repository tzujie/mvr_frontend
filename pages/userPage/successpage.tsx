import React, { useState, useEffect } from 'react';
import styles from './successPage.module.css'; 

const SuccessPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <div className={styles.container}>
            {isLoading ? (
                <div className={styles.loadingContainer}>
                    <div className={styles.loader}></div>
                    <p style={{ marginTop: 20, color: 'white', fontSize: '24px', fontWeight: 'bold' }}>Please Wait...</p>

                </div>
            ) : (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        
                    }}>
                        <p style={{
                            padding: '20px 40px',
                            borderRadius: '8px',
                            color: 'white',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            backgroundColor: '#4CAF50', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'  
                        }}>
                            你已儲值成功！
                        </p>
                    </div>

            )}

        </div>
    );
};

export default SuccessPage;
