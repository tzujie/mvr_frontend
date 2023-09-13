import React, { useState, useEffect } from 'react';

type AccountData = {
    id: number;
    name: string;
    email: string;
    phone: string;
    login_count: number;
    start_login_date: string | null;
    last_login_date: string;
};

const AccountLookup: React.FC = () => {
    const [accountData, setAccountData] = useState<AccountData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const email = 'tzdfsd@gmail.com';

        fetch(`https://8c9b-163-13-201-95.ngrok-free.app/api/account/${email}/`, {
            method: "get",
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setAccountData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div style={{ padding: '20px', backgroundColor: 'white' }}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                accountData && (
                    <div>
                        <p><strong>Name:</strong> {accountData.name}</p>
                        <p><strong>Email:</strong> {accountData.email}</p>
                        <p><strong>Phone:</strong> {accountData.phone}</p>
                        <p><strong>Login Count:</strong> {accountData.login_count}</p>
                        <p><strong>Last Login Date:</strong> {accountData.last_login_date}</p>
                    </div>
                )
            )}
        </div>
    );
};

export default AccountLookup;
