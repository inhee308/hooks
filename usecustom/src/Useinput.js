import {useState} from 'react';

export function useInput(initialValue,submitAction){

    const [inputValue, setInputValue]=useState('');
    const handleChange=(e)=>{
      setInputValue(e.target.value)
    }
    const handleSubmit=()=>{
        alert(inputValue);
        setInputValue('');
        submitAction(inputValue);
      }
    return [inputValue,handleChange,handleSubmit ]
}

