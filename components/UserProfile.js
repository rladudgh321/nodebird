import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import PropTypes from 'prop-types';

const UserProfile = ({setLoggedIn}) =>{
    const onLogOut = useCallback(()=>{
        setLoggedIn(false);
    },[]);
    return (
        <>
            <Card
                actions={[
                <div key='twit'>짹쨱<br />0</div>,
                <div key='followings'>팔로잉<br />0</div>,
                <div key='followers'>팔로워<br />0</div>
            ]}>
                <Card.Meta 
                    avatar={<Avatar>K</Avatar>}
                    title="KYH"
                    description="My name is KYH"
                />
                <Button style={{float:'right', marginTop:10}} onClick={onLogOut}>로그아웃</Button>
            </Card>
        </>
    );
}

UserProfile.propTypes = {
    setLoggedIn: PropTypes.func.isRequired,
}


export default UserProfile