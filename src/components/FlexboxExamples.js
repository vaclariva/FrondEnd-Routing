import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function FlexboxExamples() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '100px',
    border: '1px solid black',
  };

  const itemStyle = {
    width: '50px',
    height: '50px',
    fontSize : '12px',
  };

  return (
    <>
      <div>
        <h1>Align Items </h1>
        <div style={containerStyle}>
          <div style={{ ...itemStyle, background: 'red' }}></div>
          <div style={{ ...itemStyle, background: 'pink' }}></div>
          <div style={{ ...itemStyle, background: 'red' }}></div>
        </div>

        <h1>Align Self </h1>
        <div style={containerStyle}>
          <div style={{ ...itemStyle, background: 'red', alignSelf: 'flex-start' }}></div>
          <div style={{ ...itemStyle, background: 'pink' }}></div>
          <div style={{ ...itemStyle, background: 'red' }}></div>
        </div>

        <h1>Align Content </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'space-between', height: '150px', border: '1px solid black' }}>
          <div style={{ ...itemStyle, background: 'red' }}></div>
          <div style={{ ...itemStyle, background: 'pink' }}></div>
          <div style={{ ...itemStyle, background: 'red' }}></div>
        </div>

        <h1>Flex Wrap </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '200px', border: '1px solid black' }}>
          <div style={{ ...itemStyle, background: 'red' }}></div>
          <div style={{ ...itemStyle, background: 'pink' }}></div>
          <div style={{ ...itemStyle, background: 'red' }}></div>
        </div>

        <h1>Flex Basis, Grow, and Shrink </h1>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1', flexBasis: '100px', border: '1px solid black' }}>Contoh</div>
          <div style={{ flex: '2', flexBasis: '100px', border: '1px solid black' }}>Contoh</div>
          <div style={{ flex: '1', flexBasis: '100px', border: '1px solid black' }}>Contoh</div>
        </div>

        <h1>Gap </h1>
        <div style={containerStyle}>
          <div style={itemStyle}>Contoh</div>
          <div style={itemStyle}>Contoh</div>
          <div style={itemStyle}>Contoh</div>
          <div style={itemStyle}>Contoh</div>
          <div style={itemStyle}>Contoh</div>
        
        </div>

        <h1>Absolute & Relative Layout </h1>
        <div style={{ position: 'relative', width: '200px', height: '200px', border: '1px solid black' }}>
          <div style={{ position: 'absolute', top: '10px', left: '18px', width: '50px', height: '50px', background: 'red' }}></div>
        </div>
      </div>
    </>
  );
}

export default FlexboxExamples;
