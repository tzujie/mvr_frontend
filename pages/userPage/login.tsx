import React, { useState, FormEvent } from 'react';
import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { BiShow } from 'react-icons/bi';
import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';

function Password() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className="d-flex align-items-center mb-1">
                    <Form.Label className="flex-grow-1">密碼</Form.Label>
                    <Button variant="light" onClick={togglePassword}>
                        <BiShow />
                    </Button>
                </div>
                <Form.Control
                    required
                    type={passwordShown ? 'text' : 'password'}
                    name="password"
                    placeholder="輸入密碼"
                />
            </Form.Group>
        </>
    );
}

export default function Login() {
    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const data = {
            email: formData.get('account'),
            password: formData.get('password'),
        };

        try {
            // 將此處的 URL 改為您的 ngrok URL
            await axios.post('https://b084-163-13-201-95.ngrok-free.app/api/login/', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            window.alert('登入成功!!');

            Cookies.set('loggedIn', 'true', { expires: 7 });
            Cookies.set('userEmail', formData.get('account') as string, { expires: 7 });

            window.location.replace('/userPage/userSetting');
        } catch (error: any) {
            console.error(error.response?.data);
            window.alert('登入失敗!!');
        }
    };

    return (
        <>
            <Head>
                <title>MVR-登入</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="d-flex justify-content-center mt-4">
                    <Form onSubmit={handleLogin} className="bg-white rounded w-25 p-3">
                        <h2 className="text-center mb-3">使用者登入</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>帳號</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="account"
                                placeholder="輸入帳號"
                            />
                        </Form.Group>
                        <Password />
                        <div className="d-flex justify-content-around gap-5">
                            <Link href="/userPage/register" passHref>
                                <Button variant="primary" className="w-50">
                                    註冊帳號
                                </Button>
                            </Link>
                            <Button variant="primary" type="submit" className="w-50">
                                登入
                            </Button>
                        </div>
                    </Form>
                </div>
            </main>
        </>
    );
}
