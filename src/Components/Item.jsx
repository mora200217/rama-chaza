// item.jsx 
import { useEffect, useState } from "react";
import "./Item.css";
import { Button, Card } from "react-bootstrap";


export const Item = (props) => {
    
    const [elementName, setElementName] = useState(props.elementName ||  "No hay Nombre"); 


    useEffect(()=> {
        if(props.elementName)
            setElementName(props.elementName); 
    }, [props])

    const callback = () => {
        console.log("Callback!"); 
        props.addElement(); 
    }
    return (
 
    <div>
            <Card className = "myCard">
                <h5> { elementName }</h5>
            <Button onClick={callback}>Comprar</Button>
            </Card>

    </div>
    ); 
}