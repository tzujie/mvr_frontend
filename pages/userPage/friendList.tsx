import Head from "next/head";

export default function FriendList() {
    const friends = ["Alice", "Bob", "Charlie", "David", "Eva","Alex"];

    return (
        <>
            <Head>
                <title>MVR - Friend List</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta httpEquiv="Content-Language" content="en" />
            </Head>
            <main className="container">
                <h2 className="title">Friend List</h2>
                <div className="friendList">
                    {friends.map((friend, idx) => (
                        <div key={idx} className="friendCard">
                            {friend}
                        </div>
                    ))}
                </div>
            </main>

            <style jsx>{`
            html, body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
            }

                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    width: 100％!important;
                    background-color: #f5f5f5;
                }

                .title {
                    color: #162938;
                    font-size: 2em;
                    font-weight: bold;
                    margin-bottom: 30px;
                }

                .friendList {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                    gap: 20px;
                    width: 80%;
                }

                .friendCard {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100px;
                    background-color: #e6e6e6;
                    border-radius: 10px;
                    color: #162938;
                    font-size: 1.2em;
                    font-weight: 500;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .friendCard:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
                }
            `}</style>
        </>
    );
}
