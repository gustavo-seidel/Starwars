import React, {useEffect,useState} from 'react';
import swapi from './swapi';
import './App.css';
import Header from './components/Header';
import Star from './components/Star';
import pilots from './components/pilots';
//import starships from '/components/starships';


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
        <section className="lists">
          {starList.map((item)=>(
            <Star title={item.title} items={item.items} />
            
          ))}
          {starList.map((item)=>(
            <pilots items={item.items}   />
            
          ))}    

            <div className ="lists--buttons">{item.eye_color}
              <a href={`components/pilots`}className="lists--pbotton">Pilots</a>
              <a href={`components/Starships`}className="lists--Sbotton">Starships</a>
            </div>
          
        </section>
        </div>

   
    ); 
}
