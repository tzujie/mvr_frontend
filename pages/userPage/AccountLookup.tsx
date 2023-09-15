import React, { useState, useEffect } from 'react';

type AccountData = {
    id: number;
    name: string;
    email: string;
    phone: string;  
};

const App: React.FC = () => {
    const [data, setData] = useState<AccountData | null>(null);

    useEffect(() => {
        function getCookie(name: string) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
            return null;
        }

        const fetchData = async () => {
            const email = getCookie('userEmail');
            if (!email) {
                console.error("Email not found in cookies.");
                return;
            }

            try {
                const response = await fetch(`https://f648-163-13-201-95.ngrok-free.app/api/list_accounts/?email=${email}`, {
                    headers: {
                        "ngrok-skip-browser-warning": "69420"
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const jsonData = await response.json();
                console.log(jsonData);
                setData(jsonData);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f4f4f4', height: '100vh' }}>
            <header style={{ backgroundColor: '#4d86b3', color: '#fff', padding: '10px 0', fontSize: '1.5em' }}>
                Account Information
            </header>
            <div style={{ padding: '20px' }}>
                {data && (
                    <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
                        <p><strong>ID:</strong> {data.id}</p>
                        <p><strong>Name:</strong> {data.name}</p>
                        <p><strong>Email:</strong> {data.email}</p>
                        <p><strong>Phone:</strong> {data.phone}</p> 
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
