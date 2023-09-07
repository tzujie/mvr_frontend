import { useState } from 'react';
import Head from 'next/head';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function PhotoCarousel() {
    const [selectedImage, setSelectedImage] = useState(-1);
    
    return (
        <div className='d-flex justify-content-center mt-5'>
            <Carousel className='w-75'>
                {[...new Array(5)].map((_, i) => {
                    const filenames = ['interface', 'main_menu', 'world', 'event_world', 'shop'];
                    return (
                        <Carousel.Item key={i}>
                            <Image
                                src={`/photoCarousel/${filenames[i]}.png`}
                                alt={filenames[i]}
                                width="1200"
                                height="800"
                                className={`w-100 rounded ${selectedImage === i ? 'image-zoom' : ''}`}
                                onMouseOver={() => setSelectedImage(i)}
                                onMouseOut={() => setSelectedImage(-1)}
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
}

function SystemIntro() {
    return (
        <div className="my-4 fadeIn">
            <h1 className='fw-bold text-center mb-4 slide-in-from-left'>系統介紹</h1>
            <p className='fs-4 text-center mb-5'>MVR系統透過虛擬實境以及人工智慧等技術，讓使用者可以在虛擬空間中進行歌唱、演奏樂器等活動，並與好友共同參與其中，提供了一個高自由度、安全且多樣的社交互動方式</p>
            <h1 className='fw-bold text-center mt-5 mb-3'>系統畫面簡介</h1>
            <p className='fs-4 text-center mb-4'>以下將展示系統畫面，依序為</p>
            <ListGroup as='ol' numbered className='w-75 mx-auto mb-5 fs-5 list-hover'>
                {[...new Array(5)].map((_, i) => {
                    const listItems = ['戴上VR眼鏡進入主畫面，輸入帳號密碼，即登入完成', '在主選單選擇想進行的動作', '選擇預設世界或由自己創造新世界', '在開放空間參與演唱會，使用在商店取得的商品支持表演者', '在活動開放前提供特定的商店，販賣活動商品'];
                    return <ListGroup.Item as='li' variant="light" key={i} className="list-item-hover">{listItems[i]}</ListGroup.Item>;
                })}
            </ListGroup>
        </div>
    );
}
function SocialLinks() {
    return (
        <div className="social-links d-flex justify-content-center mt-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram-square fa-3x mx-3"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-square fa-3x mx-3"></i>
            </a>
            <style jsx>{`
                .social-links a {
                    color: #333;
                    transition: color 0.3s ease;
                }
                .social-links a:hover {
                    color: #007bff;
                }
            `}</style>
        </div>
    );
}

export default function Explore() {
    return (
        <>
            <Head >
                <title>MVR-探索</title>
                <meta name="description" content="探索 MVR 的虛擬實境特色" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
                <meta httpEquiv="Content-Language" content="en" />
            </Head>
            <main className="bg-white text-dark explore-page">
                <div className='container'>
                    <SystemIntro />
                    <PhotoCarousel />
                    <SocialLinks />
                </div>
                <style jsx>{`
    .fadeIn {
        animation: fadeInAnimation 1.5s;
    }
    .slide-in-from-left {
        animation: slideInFromLeft 1.5s forwards;
    }
    @keyframes fadeInAnimation {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes slideInFromLeft {
        from { transform: translateX(-150%); }
        to   { transform: translateX(0); }
    }
    .image-zoom {
        transform: scale(1);
        transition: transform 0.5s ease;
    }
    .image-zoom:hover {
        transform: scale(1.1);
    }
    .list-item-hover {
        transition: all 0.5s ease;
        border: 1px solid #ddd;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    .list-item-hover:hover {
        background-color: #e6e6e6;
        transform: translateY(-10px) scale(1.03);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
    .system-intro h1 {
        color: #333;
        font-size: 2rem;
        margin-top: 2rem;
        transition: color 0.5s ease;
    }
    .system-intro h1:hover {
        color: #007bff;
        text-decoration: underline;
    }
    .system-intro p {
        line-height: 1.6;
        color: #555;
        transition: all 0.5s ease;
    }
    .system-intro p:hover {
        transform: translateY(-5px);
    }
    .photo-carousel {
        margin-bottom: 3rem;
    }
    .explore-page {
        padding: 2rem 0;
        background: linear-gradient(to bottom, #ffffff, #f5f5f5);
    }
    .list-group-item {
        border-radius: 12px;
        transition: all 0.3s ease;
    }
    .social-links a {
        color: #333;
        transition: transform 0.3s ease;
    }
    .social-links a:hover {
        color: #007bff;
        transform: scale(1.1);
    }
`}</style>


                
            </main>
       
        </>
    );
}
