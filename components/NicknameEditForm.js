import React, { useCallback } from 'react';
import { Input } from 'antd';
import useInput from '../hooks/useInput';

const NicknameEditForm = () =>{
    const [nick, onChangeNick] = useInput('');
    const onSubmitForm = useCallback(()=>{
        console.log({nick});
    },[nick])
    return (
        <>
            <Input.Search addonBefore='닉네임' enterButton='수정' value={nick} onChange={onChangeNick} onClick={onSubmitForm} />
        </>
    );
}

export default NicknameEditForm;