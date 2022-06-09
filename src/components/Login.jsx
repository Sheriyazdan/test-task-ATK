import React, { useEffect, useRef } from 'react'
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
function Login({ }) {
    const dispatch = useDispatch();
    const user = {
        username: 'Admin',
        password: 12345
    }
    const valueUser = useRef()
    const valuePassword = useRef()
    useEffect(() => {

    }, [])
    const clickToButtonForm = () => {

        if (user.username == valueUser.current.querySelector('input').value && user.password == valuePassword.current.querySelector('input').value) {
            dispatch(setUser(true))
        }
        else {
            alert('Имя пользователя или пароль введены не верно ')
            dispatch(setUser(false))
        }

    }

    return (
        <div className='forms'>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input ref={valueUser} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input-password">password</InputLabel>
                <Input ref={valuePassword} id="my-input-password" type='password' aria-describedby="my-helper-text" />
            </FormControl>
            <Button onClick={() => clickToButtonForm()}>Войти</Button>

        </div>
    )
}

export default Login