
import React from 'react';
import "./starships/starships";



export default({items} )=>{
    return (
        <div>
            <Header />
           <h2>{items.name}</h2>
           
        </div>
    );
}