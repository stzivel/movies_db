import React, { useEffect, useState } from 'react'
import axios from 'axios';
import requests from '../Request';

function Genres() 
{

const [genres, setGenres] = useState([]);

useEffect(()=>{

    const getGenres = async ()=>{

        try{
            await axios.get(requests.requestGenres).then((response)=>{
                setGenres(response.data);
            })
        
        } catch(error){
            console.log("An error occured" + error)
        }



        
            
        
        
    }

    getGenres();

},[])


const newArray = JSON.stringify(genres);
const arr = JSON.parse(newArray);
const x = arr.name;

console.log(genres.genres[0].name);











  return (
    <div></div>
  )
}

export default Genres