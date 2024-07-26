import React, { useEffect } from 'react';
import Header from './Header';
const Container = ({ children }) => {
  useEffect(() => {
    console.log('ეს კოდი შესრულდება მხოლოდ ერთხელ, კომპონენტის დამაუნთვისას');

    // Optional cleanup function
    return () => {
      console.log('ეს კოდი შესრულდება კომპონენტის დიმაუნთვისას');
    };
  }, []); // ცარიელი დამოკიდებულებების სია

  const handle = (event) => {
    console.log(event);
  };
  return (
    <div
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        width: '50%',
        height: '100%',
      }}
    >
      <button onClick={handle}>click me</button>
      <h1>container</h1>
      {children}
    </div>
  );
};

export default Container;
