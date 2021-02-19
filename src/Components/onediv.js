import React, { Component } from 'react'
import "./onediv.css"
export default class Onediv extends Component {
    constructor(props){
        super(props)
    }
    
    
    render() {
        let row=this.props.rowIndex
        let col=this.props.colIndex
        let isBomb=(this.props.matrix[row][col]==1)?true:false
        let mycolor=(this.props.isRed && isBomb)? "red":"#cccccc"
        
        return (
            <div className="onediv"  onClick={(event)=>{this.props.handleBomb(event,isBomb,row,col)}} style={{backgroundColor:mycolor}}>
               
            </div>
        )
    }
}
