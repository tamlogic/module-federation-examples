import React from 'react';

const Button = () => {
  const [clickCount, setClickCount] = React.useState(0);
  
  const style = {
    background: '#e24a90',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <button 
      style={style}
      onClick={() => setClickCount(c => c + 1)}
    >
      App 2 Button (Clicks: {clickCount})
    </button>
  );
};

export default Button;
