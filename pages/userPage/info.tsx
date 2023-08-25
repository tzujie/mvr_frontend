import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './info.module.css';

function Info() {
    const [userData, setUserData] = useState<any | null>(null);  // 初始化為null，代表資料還沒有被載入

    const getUserEmail = () => {
        const userEmail = Cookies.get('userEmail');
        console.log("User Email:", userEmail);
        return userEmail ? userEmail : null;
    };

    useEffect(() => {
        const userEmail = getUserEmail();
        console.log("Fetched User Email:", userEmail);

        if (userEmail) {
            const apiUrl = `https://b084-163-13-201-95.ngrok-free.app/api/accounts/?email=${encodeURIComponent(userEmail)}`;

            axios
                .get(apiUrl)
                .then((response) => {
                    const userData = response.data[0];  // 從陣列中取得第一個物件
                    setUserData(userData);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, []);

    return (
        <div className={styles.container}>
            {userData && (
                <div className={styles.infoBox}>
                    <div className={styles.field}>
                        <span className={styles.label}>ID:</span>
                        {userData.id}
                    </div>
                    <div className={styles.field}>
                        <span className={styles.label}>Name:</span>
                        {userData.name}
                    </div>
                    <div className={styles.field}>
                        <span className={styles.label}>Email:</span>
                        {userData.email}
                    </div>
                    <div className={styles.field}>
                        <span className={styles.label}>Phone:</span>
                        {userData.phone}
                    </div>
                    <div className={styles.field}>
                        <span className={styles.label}>Login Count:</span>
                        {userData.login_count}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Info;
