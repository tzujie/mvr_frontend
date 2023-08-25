import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';
import Cookies from 'js-cookie';
import React from 'react';
import { useRouter } from 'next/router';

export default function TopNavbar() {
    const router = useRouter();
    const isUserLoggedIn = Boolean(Cookies.get('loggedIn'));

    const handleLogout = () => {
        Cookies.remove('loggedIn');
        Cookies.remove('userEmail');
        router.push('/');
    };

    return (
        <header>
            <h2 className="logo">MVR</h2>

            <nav className="navigation">
                <Link href="/">
                    <span>首頁</span>
                </Link>
                <Link href="/features">
                    <span>功能介紹</span>
                </Link>
                <Link href="/introduceTeam">
                    <span>團隊成員</span>
                </Link>
                <Link href="/userPage/card">
                    <span>儲值</span>
                </Link>
                <Link href={isUserLoggedIn ? "/" : "/userPage/lr"}>
                    <span onClick={isUserLoggedIn ? handleLogout : () => { }}>
                        <FaUserAlt className="mx-1 mb-2" />
                        {isUserLoggedIn ? "登出" : "登入"}
                    </span>
                </Link>
            </nav>

            <style jsx>{`
                header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 20px 100px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 1100;
                    background-color: #000;
                }

                .logo {
                    color: white;
                }

                .navigation span {
                    position: relative;
                    font-size: 1.3em;
                    color: #fff;
                    text-decoration: none;
                    font-weight: 500;
                    margin-left: 40px;
                    display: inline-block;  
                    cursor: pointer;  
                }

                .navigation span::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -6px;
                    width: 100%;
                    height: 3px;
                    background: #fff;
                    border-radius: 5px;
                    transform-origin: right;
                    transform: scaleX(0);
                    transition: transform .5s;
                }

                .navigation span:hover::after {
                    transform: scaleX(1);
                }
            `}</style>
        </header>
    );
}
