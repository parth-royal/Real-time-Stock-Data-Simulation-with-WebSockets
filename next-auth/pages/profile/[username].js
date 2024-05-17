import React from 'react';
import { useRouter } from 'next/router';

const Profile = () => {
    const router = useRouter();
    const { username } = router.query;

    return (
        <div>
            <h1>Profile</h1>
            <p>Username: {username}</p>
        </div>
    );
};

export default Profile;
