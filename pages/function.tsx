import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
    { src: '/features_img/自訂樣貌.png', title: '自訂樣貌', description: '可以透過選單角色的膚色、臉部與衣服裝扮，讓使用者創造最貼近自己理想樣貌的分身，提升使用時的帶入感。' },
    { src: '/features_img/自訂環境.png', title: '自訂環境', description: '可以任意放置物件到環境中，也能更改物件的大小與顏色，讓使用者能創造最舒適的空間、擺設，能更放鬆的使用此系統，提升使用的沉浸體驗感。' },
    { src: '/features_img/操作虛擬樂器.png', title: '操作虛擬樂器', description: '可以透過樂器物件自由的演奏、彈唱，實現因現實世界因素而無法自由表現的慾望，更能與朋友共同演奏、合音，增進彼此默契與感情。' },
    { src: '/features_img/商店選購.png', title: '商店選購', description: '能在商店街中任意選購想要的裝扮、配件等配備，在有特殊活動時也能從中購買限時開放的合作商品與道具，並有使用AI技術的虛擬人物提供服務。' },
    { src: '/features_img/大型演唱會.png', title: '大型演唱會', description: '能在特殊時段加入與歌手合作的大型演唱會，享受歌手表演的同時，也能結交有共同興趣的朋友，創造豐富的娛樂時光。' },
    { src: '/features_img/AI 客服.png', title: 'AI客服', description: '我們提供了使用AI技術的客服機器人，因應使用者多場景多管道的互動模式，透過以雲端運算、人工智慧、大數據等新數位技術為基礎和客戶服務的融合、進化提供比傳統人力客服更強大的使用者體驗。' },
];

const ImageGallery: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false, 
        });
    }, []);

    return (
        <div className="gallery-container">
            {images.map((image, idx) => (
                <div key={idx}
                    className={`image-text-container ${idx % 2 === 0 ? 'normal' : 'reversed'}`}
                    data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}>
                    <div className="image-container">
                        <img src={image.src} alt={image.title} />
                    </div>
                    <div className="text-container">
                        <h2 className="title">{image.title}</h2>
                        <p>{image.description}</p>
                    </div>
                </div>
            ))}

            <style jsx>{`
                .gallery-container {
                    width: 100vw;
                    height: auto;
                    overflow: auto;
                    background-color: #fff;
                }

                .image-text-container {
                    display: flex;
                    align-items: center;
                    height: 100vh;
                }

                .image-text-container.normal .image-container {
                    order: 1;
                }

                .image-text-container.normal .text-container {
                    order: 2;
                }

                .image-text-container.reversed .image-container {
                    order: 2;
                }

                .image-text-container.reversed .text-container {
                    order: 1;
                }

                .image-container, .text-container {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem;
                }

                img {
                    max-width: 80%;
                    border-radius: 8px;
                }

                h2 {
                    font-size: 2rem;
                    text-align: center;
                    margin-bottom: 1rem;
                }
                .text-container {
                    flex: 1;
                    display: flex;
                    flex-direction: column; 
                    justify-content: center;
                    align-items: center;
                    padding: 2rem;
                    position: relative;  
                }

                .title {
                    font-size: 2.5rem;  
                    text-align: center;
                    font-weight: bold;
                    position: absolute; 
                    top: 10%;  
                    left: 50%;  
                    transform: translateX(-50%); 
                    margin-bottom: 2rem;
                    color: #333;  
                }


                p {
                    font-size: 1.5rem;
                    text-align: center;
                    width: 80%;
                    margin-top:4rem;
                }
            `}</style>
        </div>
    );
}

export default ImageGallery;
