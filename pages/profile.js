import React from 'react';
import Head from 'next/head';
import AppLayOut from '../components/AppLayOut';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followingList = [{nickname:'kyh'},{nickname:'kju'},{nickname:'khj'}];
    const followerList = [{nickname:'kyh'},{nickname:'kju'},{nickname:'khj'}];
    return (
        <>
            <Head>
                <title>NodeBird || Profile</title>
            </Head>
            <AppLayOut>
                <NicknameEditForm />
                <FollowList header='팔로잉 리스트' data={followingList} />
                <FollowList header='팔로워 리스트' data={followerList} />
            </AppLayOut>
        </>
    );
}

export default Profile;