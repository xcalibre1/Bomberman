import React from "react"
import Onediv from "./onediv.js"
import "./DivBlock.css"
function DivBlock(props){
    return (
        <div className="parent">
           {props.row.map((val,index)=>(
               <Onediv key={index} rowIndex={props.rowidx} colIndex={index} matrix={props.matrix} handleBomb={props.handleBomb} isRed={props.isRed}/>
           ))} 
        </div>
    )
}
export default DivBlock;