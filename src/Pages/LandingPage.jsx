// Landing Page 

import { Item } from "../Components/Item"
import { Indicator } from "../Components/Indicator"
import { useState } from "react"

export const LandingPage = () => {
    const [amountOfItems, setAmountOfItems] = useState(0); 
    const getItems = () =>  {       
        const n = 3; 
        const arr = new Array(n).fill(1).map((a, idx) => {
            return (
                <Item key={idx} /> 
            )
        })
        return arr; 
    }
    

    

    const addElement = () => {
        console.log("Add element!"); 
        setAmountOfItems(amountOfItems + 1); 
    }

    return ( 
        <div>
            <h1>Ramachaza IEEE UN</h1>
            <hr/>
            <div className="d-flex">
                { getItems() }
            </div>

            <Indicator amountOfItems = {amountOfItems} /> 
        </div>
    )
}