import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Accountinfo() {
    const [userData, setUserData] = useState<any[]>([]);

    const getUserEmail = () => {
        const userEmail = Cookies.get('userEmail');
        return userEmail ? userEmail : null;
    };

    useEffect(() => {
        // 獲取Email
        const userEmail = getUserEmail();

        // 用戶登入->API
        if (userEmail) {
            const apiUrl = `https://b552-2402-7500-4dc-4ce9-e5c1-4a93-3f6e-286e.ngrok-free.app/api/accounts/?email=${encodeURIComponent(userEmail)}`;

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
        <>
            <Head>
                <title>MVR-帳號頁面</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1 className="text-white m-4">帳號資訊</h1>
                {userData.length > 0 ? (
                    <div>
                        {userData.map((user: any) => (
                            <div key={user.id} style={{ textAlign: 'center' }}>
                                <p style={{ color: 'white', fontSize: '22px' }}>ID: {user.id}</p>
                                <p style={{ color: 'white', fontSize: '22px' }}>Email: {user.email}</p>
                                <p style={{ color: 'white', fontSize: '22px' }}>Phone: {user.phone}</p>
                                {"用戶信息"}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p style={{ color: 'white', fontSize: '18px' }}>没有找到帳號資訊</p>
                )}
            </main>
        </>
    );
}
