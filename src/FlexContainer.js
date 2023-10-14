import React from 'react';
import './FlexContainer.css';

function FlexContainer() {
    return(
        <div>
            <h1>Flexbox dalam React</h1>
            <div className="flex-container">
                <div className='flex-item'>Item 1</div>
                <div className='flex-item'>Item 2</div>
                <div className='flex-item'>Item 3</div>
                <div className='flex-item'>Item 4</div>
                <div className='flex-item'>Item 5</div>
                <div className='flex-item'>Item 6</div>
                <div className='flex-item'>Item 7</div>
            </div>
        </div>
    );
}
export default FlexContainer;