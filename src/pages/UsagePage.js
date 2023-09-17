import React, { useEffect, useState} from 'react';


function UsagePage (){

    const [ counter, setCounter ] = useState(0);
    const [ color, setColor ] = useState('green');


    useEffect( () => {
        console.log("Counter : " + counter);

        return () => {
            console.log("Cleanup Function Counter : " + counter);
        };
    },[ counter]);


    return (<div>
        <div style={{backgroundColor:color}} >
            Counter : { counter }
        </div>
        <div>
            <button onClick= { () => {
                setCounter(counter+1)                
            } }
                
            >Increment</button>  

            <button onClick={ () => {                    
                    setCounter(counter-1);   
                }                
            }>Decrement</button>

            <button onClick={ () => {
                setColor('green');
            }}>Green</button>

            <button onClick={ () => {
                setColor('red');
            }}>Red</button>

        </div>
        </div>

    );
}

export default UsagePage;