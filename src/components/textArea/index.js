import React from 'react';
import './styles.css'

class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <textarea placeholder='Digite seu texto'
                id="editor"
                onChange={this.props.handleChange}
                value={this.props.input}
            /> 
        );
    }
}

export default TextArea;