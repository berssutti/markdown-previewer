import React from 'react';
import './styles.css'
import { marked } from 'marked';

class PreviewArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div 
                id="preview" 
                className="outputArea" 
                dangerouslySetInnerHTML={{__html: marked(this.props.input)}}
            >
            
            </div>
        );
    }
}

export default PreviewArea;
