import React, { Component } from 'react'
//import './App.css';
import KeyPadComponent from './KeyPadComponent'
import ResultComponent from './ResultComponent'

export class CalculatorUI extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             result:''
        }
    }

    onClick=e=>{
        if(e==="="){
            this.calculate()
        }

        else if(e==="C"){
            this.reset()
        }

        else if(e==="CE"){
            this.backspace()
        }
        
        else{
            this.setState({
                result:this.state.result + e
            })
        }
    }
    calculate=()=>{
        var checkResult=''
        if(this.state.result.includes('--')){
            checkResult=this.state.result.replace('--','+')
        }
        else {
            checkResult=this.state.result
        }
        try{
            this.setState({
                // eslint-disable-next-line
                result:(eval(checkResult) || "") + ""
            })
        }
        catch(e){
            this.setState({
                result:"error"
            })
        }
    }
    reset=()=>{
        this.setState({
            result:""
        })
    }

    backspace=()=>{
        this.setState({
            result:this.state.result.slice(0,-1)
        })
    }
    
    render() {
        return (
            <div className="calculator-body">
                <h1>Jitendra's Calculator</h1>
                <ResultComponent result={this.state.result} />
                <KeyPadComponent onClick={this.onClick}/> 
            </div>
        )
    }
}

export default CalculatorUI
