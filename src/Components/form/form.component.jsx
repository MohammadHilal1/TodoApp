import React from 'react'

import './form.styles.scss'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputText: ""
        }
    }

    formInputHandler = (e) => {

            e.preventDefault()    
            this.setState({
                inputText: e.target.value
            })
    }

    submitHandler = () => {
        this.props.inputHandle(this.state.inputText)
        this.setState({
            inputText: ""
        })
    }

    render(){
        return(
            <div className="form">
                <div className="form-input">
                    <input name = "input" type="text" value={this.state.inputText} onChange={this.formInputHandler} className="input" />
                    <button className="input-submit" onClick={this.submitHandler}>Add</button>
                </div>
                <div className="form-select">
                    <select onChange = {(e) => this.props.statusHandle(e.target.value)} name="category" id="category" className="category">
                    <option className = "option" value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                
            </div>
        )
    }
}

export default Form