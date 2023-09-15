import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Image from 'next/image';



const RechargePage: React.FC = () => {
    const router = useRouter();
    const [redirectToLogin, setRedirectToLogin] = useState<boolean>(!Boolean(Cookies.get('loggedIn')));

    useEffect(() => {
        if (redirectToLogin) {
            setTimeout(() => {
                router.push('/userPage/lr');
            }, 2000);
        }
    }, [redirectToLogin, router]);

    if (redirectToLogin) {
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
            const response = await fetch('https://f648-163-13-201-95.ngrok-free.app/api/update_money/', {
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
                    <div className={styles.inputBox}>
                        <span>User ID</span>
                        <input
                            type="number"
                            value={userID}
                            onChange={(e) => setUserID(e.target.value)}
                            placeholder="Enter your ID"
                            required
                        />
                    </div>

                    <div className={styles.inputBox}>
                        <span>Total Amount</span>
                        <input
                            type="number"
                            value={totalAmount}
                            onChange={(e) => setTotalAmount(e.target.value)}
                            placeholder="Enter amount to recharge"
                            required
                        />
                    </div>

                    <div className={styles.inputBox}>
                        <span>card number</span>
                        <input
                            type="text"
                            maxLength={19}  // 16 digits + 3 spaces
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            pattern="\d{4} \d{4} \d{4} \d{4}"
                            title="Card number should have 16 digits in format: XXXX XXXX XXXX XXXX"
                            required
                        />


                    </div>

                    <div className={styles.inputBox}>
                        <span>card holder</span>
                        <input
                            type="text"
                            value={cardHolderName}
                            onChange={(e) => setCardHolderName(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.flexbox}>
                        <div className={styles.inputBox}>
                            <span>expiration mm</span>
                            <select
                                value={expirationMonth}
                                onChange={(e) => setExpirationMonth(e.target.value)}
                            >
                                <option value="mm" disabled>MM</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="02">03</option>
                                <option value="02">04</option>
                                <option value="02">05</option>
                                <option value="02">06</option>
                                <option value="02">07</option>
                                <option value="02">08</option>
                                <option value="02">09</option>
                                <option value="02">10</option>
                                <option value="02">11</option>
                                <option value="12">12</option>
                            </select>

                        </div>

                        <div className={styles.inputBox}>
                            <span>expiration yy</span>
                            <select
                                value={expirationYear}
                                onChange={(e) => setExpirationYear(e.target.value)}
                                required
                            >
                                <option value="yy" disabled>YY</option>
                                {years.map(year => <option key={year} value={year}>{year}</option>)}
                            </select>

                        </div>


                        <div className={styles.inputBox}>
                            <span>cvv</span>
                            <input
                                type="text"
                                maxLength={3}
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                onFocus={() => setIsCvvFocused(true)}
                                onBlur={() => setIsCvvFocused(false)}
                                required
                            />
                        </div>
                    </div>

                    <input type="submit" value="submit" className={styles['submit-btn']} />
                </form>
            </div>
        </div>
    );
};

export default RechargePage;
