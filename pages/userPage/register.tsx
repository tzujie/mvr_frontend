import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BiShow } from 'react-icons/bi';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';

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
                    placeholder="輸入密碼"
                    name="password"
                />
            </Form.Group>
        </>
    );
}

export default function Register() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false); // 控制彈出視窗的顯示狀態

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            id: formData.get('userID'),
            email: formData.get('email'),
            password: formData.get('password'),
            phone: formData.get('phone'),
        };

        try {
            await axios.post('hhttps://b084-163-13-201-95.ngrok-free.app/api/register/', data);
            console.log('註冊成功');
            setShowModal(true); // 設定彈出視窗的顯示狀態為 true
        } catch (error) {
            console.log('An error occurred:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false); // 設定彈出視窗的顯示狀態為 false
        router.push('/'); 
    };

    return (
        <>
            <Head>
                <title>MVR-註冊帳號</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="d-flex justify-content-center mt-4">
                    <Form className="bg-white rounded w-25 p-3" onSubmit={handleSubmit}>
                        <h2 className="text-center mb-3">註冊</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>信箱</Form.Label>
                            <Form.Control required type="email" placeholder="輸入信箱" name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicUserID">
                            <Form.Label>用戶ID</Form.Label>
                            <Form.Control required type="text" placeholder="輸入用戶ID" name="userID" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>電話號碼</Form.Label>
                            <Form.Control required type="tel" placeholder="輸入電話號碼" name="phone" />
                        </Form.Group>
                        <Password />
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" className="w-50">
                                註冊帳號
                            </Button>
                        </div>
                    </Form>
                </div>
            </main>
            {/* 彈出視窗 */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>註冊成功</Modal.Title>
                </Modal.Header>
                <Modal.Body>您已成功註冊帳號。</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>
                        確定
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
