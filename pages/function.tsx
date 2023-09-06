import React, { useState } from 'react';
import styles from './ImageSlider.module.css';
import Head from 'next/head'
import Image from 'next/legacy/image';
import Stack from 'react-bootstrap/Stack';

interface ImageInfo {
    filename: string;
    name: string;
    work_title: string;
    work_content: string;
}

const images: ImageInfo[] = [
    { filename: '30448', name: '孫耀庭', work_title: '規劃流程與管理', work_content: '負責制定開發目標、短期長期目標與明確的日程規劃，後續進行追蹤與微調' },
    { filename: '30414', name: '劉宣珉', work_title: '挑選物件模型、背景與製作', work_content: '負責尋找可使用的物件資源，進行修改與調整，製作成需要的樣貌' },
    { filename: '30141', name: '張宇辰', work_title: '調整與修改Unity中的物件', work_content: '負責處理遊戲引擎Unity中的物件與場景的互動模式，包括移動、拿取放下、與選單互動等' },
    { filename: '30927', name: '李佳翰', work_title: '製作網站及調整與修改Unity中的物件', work_content: '負責製作網站與更新、維護，並幫忙處理遊戲引擎Unity的相關工作' },
    { filename: '31396', name: '施品伃', work_title: '美術場景製作與文書相關事宜', work_content: '負責製作美術場景與物件模型，並處理報告、競賽等文書作業' },
    { filename: '31453', name: '甯子倢', work_title: '美術場景製作與AI客服', work_content: '負責製作美術場景與物件模型，並製作、訓練AI客服機器人的模型' },
];

const ImageSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.sliderContainer}>
            <button onClick={handlePrev} className={styles.slideButton}>←</button>
            <div className={styles.slideContent}>
                {/* ... */}
            </div>
            <button onClick={handleNext} className={styles.slideButton}>→</button>
        </div>
    );
};

export default ImageSlider;
