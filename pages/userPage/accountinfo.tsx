import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
            try {
                const response = await axios.get("https://192e-163-13-201-95.ngrok-free.app/list_accounts");
                setAccountData(response.data);
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
                    }

                    .title {
                        text-align: center;
                        color: #4A90E2;
                        margin-top: 2rem;
                        font-size: 2.5rem;
                        border-bottom: 2px solid #4A90E2;
                        padding-bottom: 1rem;
                    }

                    .account {
                        background-color: #F5F5F5;
                        padding: 25px;
                        margin: 25px auto;
                        border-radius: 10px;
                        max-width: 650px;
                        box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
                        border-left: 6px solid #4A90E2;
                    }

                    h2 {
                        color: #333;
                        font-size: 1.5rem;
                        margin-bottom: 1rem;
                    }

                    p {
                        color: #666;
                        margin-bottom: 0.7rem;
                    }

                    strong {
                        color: #4A90E2;
                    }
                `}</style>
            </main>
        </>
    );
}
