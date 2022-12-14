import React from 'react';
import './styles.css';
import TextArea from '../textArea';
import PreviewArea from '../previewtArea';


class ContentArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);

    }
 
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    };

    render() {


        return(
            <div className="content">
                <section className="inputArea">
                    <h2 className="inputArea_header">Editor</h2>
                    <TextArea input={this.state.inputValue} handleChange={this.handleChange}/>
                </section>
                <section className="previewArea">
                    <h2 className='previewArea_header'>Preview</h2>
                    <PreviewArea input={this.state.inputValue}/>
                </section>

            </div>
        );
    }
}

export default ContentArea;