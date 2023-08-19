import { useState, useCallback } from 'react';

const useInput = (init) =>{
    const [value, setter] = useState(init);
    const handler = useCallback((e)=>{
        setter(e.target.value);
    },[]);
    return [value, handler, setter];
}

export default useInput;