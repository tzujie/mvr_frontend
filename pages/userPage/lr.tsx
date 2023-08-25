import React, { useState, FormEvent } from 'react';
import styles from './LoginRegister.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginRegister: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const switchToLogin = () => {
        resetInputs();
        setIsLogin(true);
    };

    const switchToRegister = () => {
        resetInputs();
        setIsLogin(false);
    };

    const resetInputs = () => {
        setEmail('');
        setPassword('');
        setName('');
        setPhone('');
    };

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            email: email,
            password: password,
        };

        try {
            await axios.post('https://b084-163-13-201-95.ngrok-free.app/api/login/', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            window.alert('登入成功!!');

            Cookies.set('loggedIn', 'true', { expires: 7 });
            Cookies.set('userEmail', email, { expires: 7 });

            window.location.replace('/userPage/userSetting');
        } catch (error: any) {
            console.error(error.response?.data);
            window.alert('登入失敗!!');
        }
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password,
            phone: phone,
        };

        try {
            await axios.post('https://b084-163-13-201-95.ngrok-free.app/api/register/', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('註冊成功');
        } catch (error) {
            console.log('An error occurred:', error);
        }
    };

    return (
        <div className={styles.container}>
            {isLogin ? (
                <form onSubmit={handleLogin} className={styles.blur}>
                    <h1 className={styles.title}>Login</h1>
                    <div className={styles.inputBox}>
                        <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder=" " />
                        <label>Email</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder=" " />
                        <label>Password</label>
                    </div>
                    <button type="submit" className={styles.submitBtn}>Login</button>
                    <p>
                        Don't have an account?{' '}
                        <span className={styles.registerLink} onClick={switchToRegister}>Register</span>
                    </p>
                </form>
            ) : (
                <form onSubmit={handleRegister} className={styles.blur}>
                    <h1 className={styles.title}>Register</h1>
                    <div className={styles.inputBox}>
                        <input name="name" type="text" value={name} onChange={e => setName(e.target.value)} required placeholder=" " />
                        <label>Name</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder=" " />
                        <label>Email</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder=" " />
                        <label>Password</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input name="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} required placeholder=" " />
                        <label>Phone</label>
                    </div>
                    <button type="submit" className={styles.submitBtn}>Register</button>
                    <p>
                        Already have an account?{' '}
                        <span className={styles.registerLink} onClick={switchToLogin}>Login</span>
                    </p>
                </form>
            )}
        </div>
    );
};

export default LoginRegister;
