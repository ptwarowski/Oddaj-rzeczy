import React from 'react'



export const Display = (option, page, foundations) => {
    
    
    return (
    <>  
        
        {foundations[option][page].map((item)=> { return (
            
            <div key={item.id} className="org">
            <div>
                <h5>{item.name}</h5>
                <p>{item.mission}</p>
            </div>
        
            <p>{item.items}</p>
            </div>
            
            
            )
            })}

        
        
    </>
    )
}