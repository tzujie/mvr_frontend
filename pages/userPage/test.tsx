import React, { useState } from 'react';
import axios from 'axios';

const ListAccounts: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [accounts, setAccounts] = useState<any[]>([]);

    const handleSearch = async () => {
        console.log("Search triggered with email:", email);
        try {
            const response = await axios.get(`https://192e-163-13-201-95.ngrok-free.app/api/list_accounts/?email=${email}`);

            if (response.status === 200) {
                setAccounts(response.data);
            } else {
                console.error("Error fetching accounts.");
            }
        } catch (error) {
            console.error("There was an error:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={email}
                placeholder="Search by email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {accounts.map((account) => (
                    <li key={account.id}>{account.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListAccounts;
