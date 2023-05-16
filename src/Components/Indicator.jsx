import { useEffect, useState } from "react"


export const Indicator = (props) => {
    const [amountInCart, setAmountInCart] = useState(0); 

    useEffect(()=>{
        if(props.amountOfItems != amountInCart){
            setAmountInCart(props.amountOfItems)
            console.log(props)
            }
    }, [props.amountOfItems])

  
    return (
        <>
            <h2> { amountInCart || 0 } </h2>
        </>
    )
}