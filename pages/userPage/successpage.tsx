import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; 
import styles from './successPage.module.css';

const SuccessPage: React.FC = () => {
    const router = useRouter(); // <-- 使用hook
    const [isLoading, setIsLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(true);

    const handleConfirmation = () => {
        setShowMessage(false);
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    useEffect(() => {
        if (!isLoading && !showMessage) {
            setTimeout(() => {
                router.push('/');
            }, 2000); 
        }
    }, [isLoading, showMessage]);


    return (
        <div className={styles.container}>
            {showMessage ? (
                <div className={styles.messageContainer}>
                    <div className={styles.confirmBox}>
                        <p className={styles.confirmText}>
                            儲值訊息已寄到您的信箱，驗證後即可交易成功。
                        </p>
                        <button onClick={handleConfirmation} className={styles.confirmButton}>
                            確認
                        </button>
                    </div>
                </div>
            ) : isLoading ? (
                <div className={styles.loadingContainer}>
                    <div className={styles.loader}></div>
                    <p className={styles.loadingText}>Please Wait...</p>
                </div>
            ) : (
                        <div className={styles.successContainer}>
                            <div className={styles.successBox}>
                                <p className={styles.successText}>
                                    你已儲值成功！將自動跳轉頁面...
                                </p>
                                <div className={styles.progressBar}></div>
                            </div>
                        </div>
            )}
        </div>
    );
};

export default SuccessPage;
