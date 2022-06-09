import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setLink } from '../store/slices/linkSlice';

function Header() {
    const valuePerson = useSelector(state => state.userSlice.value)
    const valuePersonLink = useSelector(state => state.linkSlice.value)
    const dispatch = useDispatch()
    const clickToLink = (val) => {
        dispatch(setLink(val))
    }
    return (
        <header>
            <Link onClick={() => clickToLink('На главную')} to="/"><Button variant={valuePersonLink === 'На главную' ? 'contained' : 'outlined'}>На главную</Button></Link>
            <Link onClick={() => clickToLink('Новости')} to="/news"><Button variant={valuePersonLink === 'Новости' ? 'contained' : 'outlined'}>Новости</Button></Link>
            <Link onClick={() => clickToLink('Профиль')} to="/profile"><Button variant={valuePersonLink === 'Профиль' ? 'contained' : 'outlineds'}>Профиль</Button></Link>
            <span className='auth_person'>{valuePerson ? 'Вы авторизованы' : 'Вы не авторизованы'}</span>
        </header>
    )
}

export default Header