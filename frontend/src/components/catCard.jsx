import React, { Component } from 'react';

class CatCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='card'>
                <div className="card-body">
                    <div className="card-title">{ this.props.item.breed }</div>
                    <div className="card-text">{ this.props.item.age }</div>
                </div>

            </div>
         );
    }
}
 
export default CatCard;