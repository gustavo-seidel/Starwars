import React, {useEffect,useState} from 'react';
import swapi from './swapi';
import './App.css';
import Header from './components/Header';

export default (item) => {
/*
useEffect
-quando a tela for carregada ele ira carregar a fucao
useState
-salva a lista da função
*/
const [starList,setStarList]= useState([]);

useEffect(()=>{
  const loadAll = async () => {
    let list = await swapi.getHomeList();
    setStarList(list);
  }
})
  

    return(
      <div calssName="page">
        <Header />  
            <div className ="lists--buttons">{item.eye_color}
              <a href={`/pilots`}className="lists--pbotton">Pilots</a>
              <a href={`/Starships`}className="lists--Sbotton">Starships</a>
            </div>
        </div>

   
    ); 
}
