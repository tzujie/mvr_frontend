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
                <div>
                    儲值成功！
                </div>
            )}

        </div>
    );
};

export default SuccessPage;
