import React from 'react'
import Typist from "react-typist";

 function WishCard(props) {

    const {msg,delay,className} = props
    return (
        <>
            <Typist className={className}>
                    <Typist.Delay ms={delay} />
                    {msg.map((word) => (
                        <label>
                            {word} 
                        </label>        
                    )) }
            </Typist>            
        </>
    )
}
export default WishCard