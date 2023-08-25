import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Cookies from 'js-cookie';

const RechargePage: React.FC = () => {
    const router = useRouter();
    const [isLogged, setIsLogged] = useState<boolean>(Boolean(Cookies.get('loggedIn')));

    useEffect(() => {
        if (!isLogged) {
            setTimeout(() => {
                router.push('/userPage/lr');
            }, 2000);
        }
    }, [isLogged, router]);

    if (!isLogged) {
        return (
            <div className={styles.notLoggedInContainer}>
                <p className={styles.notLoggedInText}>您尚未登入，即將跳轉到登入頁面...</p>

                <div className={styles.progressBar}></div>
            </div>
        );
    }


    const [cardNumber, setCardNumber] = useState<string>('');
    const [cardHolderName, setCardHolderName] = useState<string>('');
    const [expirationMonth, setExpirationMonth] = useState<string>('mm');
    const [expirationYear, setExpirationYear] = useState<string>('yy');
    const [cvv, setCvv] = useState<string>('');

    const [isCvvFocused, setIsCvvFocused] = useState<boolean>(false);
    const years = Array.from({ length: 31 }, (_, i) => 2018 + i);

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
        setCardNumber(value);
    };

    const formatCardNumber = (number: string) => {
        const cleanedNumber = number.replace(/\D+/g, '');
        let formatted = cleanedNumber;

        while (formatted.length < 16) {
            formatted += '#';
        }

        return formatted.replace(/(.{4})/g, '$1 ').trim();
    };

    const [userID, setUserID] = useState<string>('');
    const [totalAmount, setTotalAmount] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('https://192e-163-13-201-95.ngrok-free.app/api/update_money/', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: userID,
                    money: totalAmount,
                }),
            });

            const data = await response.json();
            console.log(data);

            router.push('/userPage/successpage');
        } catch (error) {
            console.error("There was an error updating the money:", error);
        }
    };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles['card-container']}>
                    <div className={`${styles.front} ${isCvvFocused ? styles.flipped : ''}`}>
                        <div className={styles['card-number-box']}>{formatCardNumber(cardNumber)}</div>
                        <div className={styles['card-holder-name']}>{cardHolderName || 'full name'}</div>
                        <div className={styles.expiration}>
                            <span className={styles['exp-month']}>{expirationMonth}</span>
                            <span className={styles['exp-separator']}>/</span>
                            <span className={styles['exp-year']}>{expirationYear}</span>
                        </div>
                    </div>
                    <div className={`${styles.back} ${isCvvFocused ? styles.flipped : ''}`}>
                        <div className={styles['cvv-box']}>{cvv.padEnd(3, '#')}</div>
                    </div>
                    <Image src="/creditcard/visa.png" alt="Visa Logo" width={60} height={40} className={styles.visaLogo} />
                </div>
                <form onSubmit={handleSubmit}>
        
                </form>
            </div>
        </div>
    );
};

export default RechargePage;
