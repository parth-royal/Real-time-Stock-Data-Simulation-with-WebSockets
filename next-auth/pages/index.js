import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Next.js + Flask App!</h1>
            <p>This is a simple example application demonstrating integration between Flask and Next.js.</p>
            <p>Feel free to navigate to different sections:</p>
            <ul>
                <li>
                    <Link href="/login">
                        Login Page (SSR)
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard">
                        Dashboard (CSR)
                    </Link>
                </li>
                <li>
                    <Link href="/profile/[username]" as="/profile/user123">
                        Profile (ISR)
                    </Link>
                </li>
                <li>
                    <Link href="/locked">
                        Locked Page (SSG)
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
