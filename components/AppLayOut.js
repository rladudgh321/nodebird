import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col } from 'antd';
import Link from 'next/link';
import UserProfile from '../components/UserProfile';
import LogInForm from '../components/LogInForm';

const AppLayOut = ({children}) => {
    const [isLoggedIn, setLoggedIn ] = useState(false);
    const items = [{
        key:'home',
        label:(<Link href="/"><a>Home</a></Link>)
    },{
        key:'profile',
        label:(<Link href="/profile"><a>Profile</a></Link>)
    },{
        key:'search',
        label:(<Input.Search enterButton/>)
    },{
        key:'signup',
        label:(<Link href="/signup"><a>SignUp</a></Link>)
    }];
    return (
        <>
            <Menu mode='horizontal' items={items} />
            <Row>
                    { isLoggedIn ? <UserProfile setLoggedIn={setLoggedIn} /> : <LogInForm setLoggedIn={setLoggedIn} /> }
                <Col xs={24} md={6}>
                </Col>
                <Col xs={24} md={12}>{ children }</Col>
                <Col xs={24} md={6}>
                    <a href='https:/www.naver.com' target='_blank' rel='noopener noreferrer'>네이버</a>
                </Col>
            </Row>
        </>
    );
}

AppLayOut.propTypes = {
    children : PropTypes.elementType.isRequired,
}

export default AppLayOut;