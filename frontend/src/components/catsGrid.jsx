import React, { Component } from 'react';
import Catcard from './catCard'

class CatsGrid extends Component {
    state = {  }
    render() { 
        return this.props.isLoading ? ( <h1>Loading...</h1> ) : (
            <section className='col'>
                <div className="row">
                    
                {this.props.items.map(
                    item => (
                        <Catcard item={item} />
                    )
                )}
                </div>
            </section>
        );
    }
}
 
export default CatsGrid;