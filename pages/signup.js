import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import AppLayOut from '../components/AppLayOut';
import { Input, Button, Form, Checkbox } from 'antd';
import useInput from '../hooks/useInput';

const SignUp = () => {
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    
    const [PasswordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(false);
    },[]);

    const [term, setTerm] = useState(false);
    const [termError,setTermError] = useState(false);
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);       
    },[]);
    const onSubmitForm = useCallback(()=>{
        if(password !== PasswordCheck) {
            setPasswordError(true);
        } else if (!term) {
            setTermError(true);
        } else {
            setPasswordError(false);
            setTermError(false);
        }

        console.log({email,nickname,password,PasswordCheck});
    },[email,password,PasswordCheck, term])
    return (
        <>
            <Head>
                <title>NodeBird || SignUp</title>
            </Head>
            <AppLayOut>
                <Form onFinish={onSubmitForm}>
                    <h2>회원가입</h2>
                    <div>
                        <label htmlFor='email'>이메일</label>
                        <Input id='email' value={email} onChange={onChangeEmail} required />
                    </div>
                    <div>
                        <label htmlFor='nickname'>닉네임</label>
                        <Input id='nickname' value={nickname} onChange={onChangeNickname} required />
                    </div>
                    <div>
                        <label htmlFor='password'>비밀번호</label>
                        <Input id='password' value={password} onChange={onChangePassword} required />
                    </div>
                    <div>
                        <label htmlFor='passwordCheck'>비밀번호 확인</label>
                        <Input id='passwordCheck' value={PasswordCheck} onChange={onChangePasswordCheck} required />
                        {passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다</div> }
                    </div>
                    <div>
                        <Checkbox checked={term} onChange={onChangeTerm} required >약관에 동의합니다</Checkbox>
                        { termError && <div style={{color:'red'}}>약관에 동의해야 가입됩니다</div> }
                    </div>
                    <div>
                        <Button htmlType='submit'>가입하기</Button>
                    </div>
                </Form>
            </AppLayOut>
        </>
    );
}

export default SignUp;