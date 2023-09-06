import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function AccountInfo() {
    interface Account {
        id: number;
        name: string;
        email: string;
        phone: string;
        login_count: number;
        start_login_date: string | null;
    }

    const [accountData, setAccountData] = useState<Account[]>([{
        id: 13,
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "1234567890",
        login_count: 8,
        start_login_date: null
    }]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAccountData = async () => {
            const userId = Cookies.get('userId');  
            if (!userId) {
                setError("User not logged in");
                return;
            }

            try {
                const response = await axios.get(`https://192e-163-13-201-95.ngrok-free.app/api/list_accounts/${userId}/`);
                setAccountData([response.data]);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchAccountData();
    }, []);


    return (
        <>
            <Head>
                <title>MVR - Account Information</title>
                <meta name="description" content="View account information" />
                <link rel="icon" href="/favicon.ico" />
                <meta httpEquiv="Content-Language" content="en" />
            </Head>
            <main className="main-content">
                <h1 className="title">Account Information</h1>
                {accountData.map(account => (
                    <div key={account.id} className="account">
                        <h2>{account.name}</h2>
                        <p><strong>ID:</strong> {account.id}</p>
                       
                        <p><strong>Email:</strong> {account.email}</p>
                        <p><strong>Phone:</strong> {account.phone}</p>
                    </div>
                ))}

                <style jsx>{`
                    .main-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        font-size: 1.2rem;
                        height: 100vh; /* Fill the entire viewport height */
                        font-size: 1.5rem;
                    }

                    .title {
                        text-align: center;
                        color:#4d86b3;
                        margin-top: 2rem;
                        font-size: 3rem; 
                        border-bottom: 3px solid #4d86b3;
                        padding-bottom: 1.5rem;
                    }

                    .account {
                        background-color: #F5F5F5;
                        padding: 30px; 
                        margin: 30px auto; 
                        border-radius: 12px; 
                        width: 70%; 
                        max-width: 650px;
                        box-shadow: 0px 4px 20px rgba(0,0,0,0.1);
                        border-left: 8px solid #4d86b3; 
                    }

                    h2 {
                        color: #333;
                        font-size: 2rem;
                        margin-bottom: 1.5rem;
                    }

                    p {
                        color: #666;
                        margin-bottom: 1rem; 
                    }

                    strong {
                        color: #4d86b3;
                    }
                `}</style>
            </main>
        </>
    );
}
