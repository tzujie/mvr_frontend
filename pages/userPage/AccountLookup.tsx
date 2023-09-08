import React, { useState } from 'react';
import axios from 'axios';

const AccountLookup: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [account, setAccount] = useState<any>(null);
    const [error, setError] = useState<string>('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://192e-163-13-201-95.ngrok-free.app/api/account/${email}/`);
            if (typeof response.data === 'string' && response.data.startsWith('<')) {
                // This looks like HTML, so let's handle it separately
                setAccount({ html: response.data });
            } else {
                setAccount(response.data);
            }
            setError('');
        } catch (err) {
            setAccount(null);
            setError('查詢失敗，請確認電子郵件是否正確。');
        }
    };

    return (
        <div style={{ backgroundColor: 'white', padding: '20px' }}>
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
                    {account.html ?
                        <div dangerouslySetInnerHTML={{ __html: account.html }} />
                        :
                        <>
                            <p>名稱: {account.name}</p>
                            <p>電子郵件: {account.email}</p>
                            <p>電話: {account.phone}</p>
                        </>
                    }
                </div>
            )}
        </div>
    );
};

export default AccountLookup;
