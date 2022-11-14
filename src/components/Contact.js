import React from 'react';
import Navbar from './Navbar';
import './Common.css';
import { useSelector } from 'react-redux';

const Contant = ()  =>{

    const isLight = useSelector((state)=>state.isLight);

    return(
        <>
          <div className={isLight?'light':'dark'}>
            <Navbar />
            <h1>You can mail me help@abhi.in</h1>
          </div>  
        </>  
    )
}

export default Contant;