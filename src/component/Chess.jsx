import React from 'react'
import "./chess.css"
export const Chess = ({n}) => {
    let isblack=false;
    let r=[];
    for(let i=0; i<n; i++){
        const color=[];
        for(let j=0;j<n;j++){
            isblack=(i+j)%2;
            color.push(
                <div key={i-j} className={isblack? 'black':'white'}>
                    
                </div>
            )
        }
        console.log(r);
        r.push(
            <div key={i} className='row'>
                {color}
            </div>
        )
    }
  return (
    <>
    <h1>Chess Board</h1>
    <div className='chess'>{r}</div>
    </>

    
  )
}
