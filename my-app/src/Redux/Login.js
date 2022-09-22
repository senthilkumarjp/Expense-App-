import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/user';

export default function Login() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=> dispatch(login(
            {name:'senthil', age:22, email:'sam@gmail.com'}
        ))}>Login</button>
    </div>
  )
}
