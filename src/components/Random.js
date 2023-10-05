import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const {gif, fetchData, loading} =useGif();

    return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[25px]
    '>
        <h1 className='text-2xl mt-[15px] underline font-bold'>A Random Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
        }
        
        <button 
        className='w-10/12 mb-[20px] bg-yellow-500 rounded font-bold border border-black text-lg py-2 '
        onClick={()=> fetchData() }>
            Generate
        </button>
    </div>
  )
}

export default Random