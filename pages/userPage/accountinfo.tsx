import { useState, useEffect } from 'react';
import axios from 'axios';

type AccountDataType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    login_count: number;
    start_login_date: string | null;
    last_login_date: string;
};

function test() {
    const [accountData, setAccountData] = useState<AccountDataType | null>(null);

    useEffect(() => {
        async function fetchAccountData() {
            try {
                const response = await axios.get('https://f648-163-13-201-95.ngrok-free.app/api/list_accounts/?email=tzdfsd@gmail.com');
                if (response.data && response.data.length > 0) {
                    setAccountData(response.data[0]);
                }
            } catch (error) {
                console.error("Failed to fetch account data:", error);
            }
        }

        fetchAccountData();
    }, []);

    return (
        <div>
            {accountData ? (
                <>
                    <h1>帳戶資訊</h1>
                    <p><strong>Name:</strong> {accountData.name}</p>
                    <p><strong>Email:</strong> {accountData.email}</p>
                    <p><strong>Phone:</strong> {accountData.phone}</p>
                    <p><strong>Login Count:</strong> {accountData.login_count}</p>
                    <p><strong>Last Login Date:</strong> {accountData.last_login_date}</p>
                </>
            ) : (
                <p>Loading account information...</p>
            )}
        </div>
    );
}

export default test;
