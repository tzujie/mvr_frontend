import React, { useState, FormEvent } from 'react';
import styles from './LoginRegister.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'

const LoginRegister: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');

    const [showVerificationBar, setShowVerificationBar] = useState(false);
    const [showVerificationInput, setShowVerificationInput] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');



    const switchToLogin = () => {
        resetInputs();
        setIsLogin(true);
    };
    
    const switchToRegister = () => {
        resetInputs();
        setIsLogin(false);
    };

    const handleForgotPassword = () => {
        setShowVerificationBar(true);
        setTimeout(() => {
            setShowVerificationBar(false);
            setShowVerificationInput(true);
        }, 2000);
    };
    const handleVerificationSubmit = (code: string) => {
        if (code === "0000") {
            alert("驗證成功！請重設密碼。");
            setShowVerificationInput(false);
            window.location.replace('/userPage/userSetting');
        } else {
            alert("驗證碼錯誤，請重新輸入。");
        }
    }

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
            const response = await axios.post('https://8c9b-163-13-201-95.ngrok-free.app/api/login/', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            window.alert('登入成功!!');

            Cookies.set('loggedIn', 'true', { expires: 7 });
            Cookies.set('userEmail', email, { expires: 7 });
            Cookies.set('userId', response.data.user_id, { expires: 7 });

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
            gender: gender 
        };
        console.log('Sending data:', data);

        try {
            await axios.post('https://8c9b-163-13-201-95.ngrok-free.app/api/register/', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            window.alert('註冊成功!!');
            window.location.replace('/');
        } catch (error) {
            console.log('An error occurred:', error);
            window.alert('註冊失敗!!');
        }
    };
    if (showVerificationBar) {
        return (
            <div className={styles.verificationBarContainer}>
                <p>驗證信已發送，請稍候...</p>
                <div className={styles.progressBar}></div>
            </div>
        );
    }

    if (showVerificationInput) {
        return (
            <div className={styles.verificationInputContainer}>
                <p>請輸入驗證碼：</p>
                <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                />
                <button className={styles.submitBtn} onClick={() => handleVerificationSubmit(verificationCode)}>Submit Code</button>
            </div>
        );
    }


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
                    <p onClick={handleForgotPassword} className={styles.forgotPasswordLink}>忘記密碼？</p>
                    <div className={styles.verificationBar} style={{ display: showVerificationBar ? 'block' : 'none' }}>
                        <div className={styles.progressBar}></div>
                    </div>

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
                        <div >
                            <label className={styles.genderText}>Gender</label>
                            <label className={styles.genderLabel}>
                                <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={e => setGender(e.target.value)} />
                                Male
                            </label>
                            <label className={styles.genderLabel}>
                                <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={e => setGender(e.target.value)} />
                                Female
                            </label>
                        </div>


                    <button type="submit" className={styles.submitBtn}>Register</button>
                        <p className={styles.centerParagraph}>
                            Already have an account?{' '}
                            <span className={styles.registerLink} onClick={switchToLogin}>Login</span>
                        </p>
                        
                </form>
            )}
        </div>
    );
};

export default LoginRegister;
