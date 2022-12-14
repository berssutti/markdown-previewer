import React from 'react';
import './styles.css';
import TextArea from '../textArea';
import PreviewArea from '../previewtArea';

class ContentArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="content">
                <section className="inputArea">
                    <h2 className="inputArea_header">Write your markdown</h2>
                    <TextArea />
                </section>
                <section className="previewArea">
                    <h2 className='previewArea_header'>Preview</h2>
                    <PreviewArea />
                </section>

            </div>
        );
    }
}

export default ContentArea;