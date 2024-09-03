import React, { useState,useEffect} from 'react'
import { useAuth } from '../../context/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Spinner';

const Private = () => {
    const [ok,setOk]=useState(false);
    const [auth,setAuth]=useAuth();

    useEffect(() => {
        const authChecK=async()=>{
            const res = await axios.get('http://localhost:8000/api/v1/auth/user-auth');
    
            if(res.data.ok){
                setOk(true);
            }else{
                setOk(false);
            }
        }
        if(auth?.token){
            authChecK();
        }
        
    }, [auth?.token]);

    

  return ok ? <Outlet/>:<Spinner/>;
}

export default Private
