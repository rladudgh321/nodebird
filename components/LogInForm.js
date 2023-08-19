import React, { useCallback } from 'react';
import { Input, Form, Button } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

const LogInForm = ({setLoggedIn}) =>{
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const onSubmitForm = useCallback(()=>{
        console.log({email,password});
        setLoggedIn(true);
    },[email, password]);
    return (
        <>
            <Form onFinish={onSubmitForm}>
                <div>
                    <label htmlFor='id' >이메일</label>
                    <Input id='id' type="email" value={email} onChange={onChangeEmail}/>
                </div>
                <div>
                    <label htmlFor='pwd'>비밀번호</label>
                    <Input id='pwd' type="password" value={password} onChange={onChangePassword} />
                </div>
                <div>
                    <Button type='primary' htmlType='submit'>로그인</Button>
                    <Button style={{float:'right'}}><Link href="/signup"><a>회원가입</a></Link></Button>
                </div>
                
            </Form>
        </>
    );
}

LogInForm.propTypes = {
    setLoggedIn:PropTypes.func.isRequired,
}

export default LogInForm;