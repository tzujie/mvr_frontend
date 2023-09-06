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
            <h1 className='fw-bold text-center mb-4'>系統介紹</h1>
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

export default function Explore() {
    return (
        <>
            <Head>
                <title>MVR-探索</title>
                <meta name="description" content="探索 MVR 的虛擬實境特色" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta httpEquiv="Content-Language" content="en" />
            </Head>
            <main className="bg-white text-dark explore-page">
                <div className='container'>
                    <SystemIntro />
                    <PhotoCarousel />
                </div>
                <style jsx>{`
                    .fadeIn {
                        animation: fadeInAnimation 1s;
                    }
                    @keyframes fadeInAnimation {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                    .image-zoom {
                        transform: scale(1.05);
                    }
                    .list-item-hover:hover {
                        background-color: #f3f4f6;
                        transform: translateY(-5px);
                        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                    }
                    .system-intro h1 {
                        color: #333;
                        font-size: 2rem;
                        margin-top: 2rem;
                    }
                    .system-intro p {
                        line-height: 1.6;
                        color: #555;
                    }
                    .photo-carousel {
                        margin-bottom: 3rem;
                    }
                    .explore-page {
                        padding: 2rem 0;
                    }
                    .list-group-item {
                        border-radius: 12px;
                        transition: all 0.3s ease;
                        border: 1px solid #ddd;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    }
                `}</style>
            </main>
        </>
    );
}
