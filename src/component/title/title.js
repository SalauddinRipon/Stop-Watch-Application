import React from 'react'
import './title.css'

class Title extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'Stop-Watch-Application',
            isInput: false

        }

    }

    editHandeler() {
        this.setState({
            ...this.state,
            isInput: true
        })
    }

    inputChange(event){
       this.setState({
           ...this.state,
           title:event.target.value
       })
        
    }

    keyHandeler(event){
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                isInput:false
            })
        }
    }

    onBlur(event){
        this.setState({
            ...this.state,
            isInput:false
        })
    }

    render() {

        let output = null
        if (this.state.isInput) {
            output = (
                <div className="Title">
                    <input className="form-control"
                     onChange={(event) => this.inputChange(event)}
                     onBlur={(event) => this.onBlur(event)} 
                     onKeyPress={(event) => this.keyHandeler(event)}
                     type="text" 
                     value={this.state.title} />
                </div>
            )
        }
        else {
            output = (
                <div className="d-flex Title">
                    <h1 className='display-4'>{this.state.title}</h1>
                    <span onClick={() => this.editHandeler()} className="ml-auto edit-icon"><i className="fas fa-pencil-alt"></i></span>
                </div>
            )
        }


        return (
            <div>
                {output}
            </div>
        )
    }
}



export default Title;