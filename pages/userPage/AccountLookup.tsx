// src/components/AccountLookup.tsx

import React, { useState } from 'react';
import axios from 'axios';

const AccountLookup: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [account, setAccount] = useState<any>(null);
    const [error, setError] = useState<string>('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://192e-163-13-201-95.ngrok-free.app/api/account/${email}/`);
            setAccount(response.data);
            setError('');
        } catch (err) {
            setAccount(null);
            setError('查詢失敗，請確認電子郵件是否正確。');
        }
    };

    return (
        <div>
            <input
                type="email"
                placeholder="輸入電子郵件"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSearch}>查詢</button>

            {error && <p>{error}</p>}
            {account && (
                <div>
                    <p>名稱: {account.name}</p>
                    <p>電子郵件: {account.email}</p>
                    <p>電話: {account.phone}</p>
                    {/* 顯示其他需要的帳戶資訊 */}
                </div>
            )}
        </div>
    );
};

export default AccountLookup;
