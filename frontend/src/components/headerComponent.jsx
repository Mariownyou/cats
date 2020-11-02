import React, { Component } from 'react';

class HeaderComponent extends Component {
    state = {  }
    render() { 
        return (
        <li className="nav-item">
            <a className="nav-link" href="#">{ this.props.name }<span className="sr-only">(current)</span></a>
        </li>
        );
    }
}
 
export default HeaderComponent;