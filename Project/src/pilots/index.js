import React from 'react';
import "./pilots/pilots";



export default({items} )=>{
    return (
        <div>
            <Header />
           <h2>{items.name}</h2>
           
        </div>
    );
}