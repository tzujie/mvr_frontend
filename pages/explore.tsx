import Head from 'next/head';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/legacy/image';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function PhotoCarousel() {
    return (
        <div className='d-flex justify-content-center mt-4'>
            <Carousel className='w-75'>
                {[...new Array(5)].map((_, i) => {
                    const filenames = ['interface', 'main_menu', 'world', 'event_world', 'shop'];
                    return (
                        <Carousel.Item key={i}>
                            <Image src={`/photoCarousel/${filenames[i]}.png`} alt={filenames[i]} width="1500" height="1000" className='w-100' />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
}

function SystemIntro() {
    return (
        <>
            <h1 className='fw-bold text-center'>系統介紹</h1>
            <p className='fs-4'>MVR系統透過虛擬實境以及人工智慧等技術，讓使用者可以在虛擬空間中進行歌唱、演奏樂器等活動，並與好友共同參與其中，提供了一個高自由度、安全且多樣的社交互動方式</p>
            <h1 className='fw-bold text-center mt-3'>系統畫面簡介</h1>
            <p className='fs-4'>以下將展示系統畫面，依序為</p>
            <ListGroup as='ol' numbered className='w-50 align-self-center fs-5'>
                {[...new Array(5)].map((_, i) => {
                    const listItems = ['戴上VR眼鏡進入主畫面，輸入帳號密碼，即登入完成', '在主選單選擇想進行的動作', '選擇預設世界或由自己創造新世界', '在開放空間參與演唱會，使用在商店取得的商品支持表演者', '在活動開放前提供特定的商店，販賣活動商品'];
                    return <ListGroup.Item as='li' variant="secondary" key={i}>{listItems[i]}</ListGroup.Item>;
                })}
            </ListGroup>
        </>
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
            </Head>
            <main>
                <div className='m-4 p-3 bg-gradient rounded text-white d-flex flex-column relative'>
                    
                    <SystemIntro />
                    <PhotoCarousel />
                </div>
            </main>
        </>
    );
}