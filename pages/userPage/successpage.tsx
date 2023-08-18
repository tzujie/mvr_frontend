import React from 'react';

const SuccessPage: React.FC = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
    };

    const messageStyle = {
        padding: '20px 40px',
        borderRadius: '5px',
        backgroundColor: '#4caf50',  // 綠色代表成功
        color: '#fff',
        fontSize: '24px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
    };

    return (
        <div style={containerStyle}>
            <div style={messageStyle}>
                你已儲值成功！
            </div>
        </div>
    );
};

export default SuccessPage;
