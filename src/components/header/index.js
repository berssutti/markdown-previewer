import React from 'react';
import './styles.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header className="header">
                <h1>Markdown Previewer</h1>
            </header>
        );
    }
}

export default Header;