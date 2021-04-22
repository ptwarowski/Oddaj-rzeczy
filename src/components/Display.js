import React from 'react'



export const Display = (option, page, foundations) => {
    
    
    return (
    <>  
        
        {foundations[option][page].map((item)=> { return (
            <>
            <div key={item[0].toString} className="org">
            <div>
                <h5>{item[0]}</h5>
                <p>{item[1]}</p>
            </div>
        
            <p>{item[2]}</p>
            </div>
            
            </>
            )
            })}

        
        
    </>
    )
}