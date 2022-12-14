import React from 'react';
import './styles.css'

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleChage = this.handleChage.bind(this);
    }

    handleChage(event) {
        this.setState({
            inputValue: event.target.value
        });
        
    }
    
    render() {
        return(
            <textarea placeholder='Digite seu texto' 
                onChange={this.handleChage}
                value={this.state.inputValue} 
            /> 
        );
    }
}

export default TextArea;