import React, { useState, FormEvent } from 'react';
import styles from './LoginRegister.module.css';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginRegister: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };

        try {
            await axios.post('https://b084-163-13-201-95.ngrok-free.app/api/login/', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            window.alert('登入成功!!');

            Cookies.set('loggedIn', 'true', { expires: 7 });
            Cookies.set('userEmail', formData.get('email') as string, { expires: 7 });

            window.location.replace('/userPage/userSetting');
        } catch (error: any) {
            console.error(error.response?.data);
            window.alert('登入失敗!!');
        }
        const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);

            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password'),
                phone: formData.get('phone'),
            };

            console.log(JSON.stringify(data));

            try {
                await axios.post('https://b084-163-13-201-95.ngrok-free.app/api/register/', JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log('註冊成功');
  
            } catch (error) {
                console.log('An error occurred:', error);
            }
        };
    };
    return (
        <div className={styles.container}>
            {isLogin ? (
                <div className={styles.blur}>
                    <h1 className={styles.title}>Login</h1>
                    <div className={styles.inputBox}>
                        <input type="email" required placeholder=" " />
                        <label>Email</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="password" required placeholder=" " />
                        <label>Password</label>
                    </div>
                    <button className={styles.submitBtn}>Login</button>
                    <p>
                        Don't have an account?{' '}
                        <span className={styles.registerLink} onClick={() => setIsLogin(false)}>Register</span>
                    </p>
                </div>
            ) : (
                <div className={styles.blur}>
                    <h1 className={styles.title}>Register</h1>
                    <div className={styles.inputBox}>
                        <input type="email" required placeholder=" " />
                        <label>Email</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="text" required placeholder=" " />
                        <label>Name</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="tel" required placeholder=" " />
                        <label>Phone</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="password" required placeholder=" " />
                        <label>Password</label>
                    </div>
                    <button className={styles.submitBtn}>Register</button>
                        <p>
                            Already have an account?{' '}
                            <span className={styles.registerLink} onClick={() => setIsLogin(true)}>Login</span>
                        </p>
                </div>
                
            )}
        </div>
    );
};

export default LoginRegister;
