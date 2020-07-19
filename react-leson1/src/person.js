// Shimrit mabrook 
import React from 'react';

export default function Person(prop)
{
    const {name , age} = prop;
    const kids = JSON.stringify(prop);
    const stylelong = {
        color: "red",
        fontSize: "40px"
    }
    const styleshort = {
        color: "blue",
        fontSize: "20px"
    }
    const len = name.length;
    return (<>
       <p>{JSON.stringify(prop)}</p> 
       <p>my age next year is: {age+1}</p>  
       {len > 4 ? <p style={stylelong}>I have long name : {name}</p> : <p style={styleshort}>I have short name: {name}</p>}
    </>);
}