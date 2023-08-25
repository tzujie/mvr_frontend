import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Cookies from 'js-cookie';
im
export default function info() {
    const [userData, setUserData] = useState<any[]>([]);

    const getUserEmail = () => {
        const userEmail = Cookies.get('userEmail');
        console.log("User Email:", userEmail);  // 新增的 console.log
        return userEmail ? userEmail : null;
    };

    useEffect(() => {
        // 獲取Email
        const userEmail = getUserEmail();
        console.log("Fetched User Email:", userEmail);  // 新增的 console.log

        // 用戶登入->API
        if (userEmail) {
            const apiUrl = `https://b084-163-13-201-95.ngrok-free.app/api/accounts/?email=${encodeURIComponent(userEmail)}`;

            axios
                .get(apiUrl)
                .then((response) => {
                    // 處理API
                    const userData = response.data;

                    //放到state
                    setUserData(userData);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <div className={styles.field}>
                    <span className={styles.label}>ID:</span>
                    {accountData.id}
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Name:</span>
                    {accountData.name}
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Email:</span>
                    {accountData.email}
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Phone:</span>
                    {accountData.phone}
                </div>
                <div className={styles.field}>
                    <span className={styles.label}>Login Count:</span>
                    {accountData.login_count}
                </div>
            </div>
        </div>
    );
};

export default Info;
