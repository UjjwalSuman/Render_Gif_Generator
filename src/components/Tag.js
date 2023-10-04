import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';




const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [gif, setGif] = useState("");
  const [loading, setLoading] =useState('false');
  const  [tag, setTag] = useState('');

  function clickHandler(){
    fetchData();
  }

  async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect (()=>{
    fetchData();
  },[] )

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[25px]
    '>
        <h1 className='text-2xl mt-[15px] underline font-bold'>Random {tag} Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
        }

        <input 
            className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
            onChange = {(event)=>setTag(event.target.value)}
            value={tag}
        />
        
        <button 
        className='w-10/12 mb-[20px] bg-yellow-500 rounded font-bold border border-black text-lg py-2 '
        onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}

export default Tag