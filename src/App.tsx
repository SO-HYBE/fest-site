import React from 'react';
import './App.css';
import head from './images/head.png'
import main from './videos/background.mp4'
function App() {
  return (
      <div className='App'>
        <div className='header relative w-full'>
          <div className=''>
            <ul className='flex flex-row pt-6 pb-6'>
            <li className='basis-1/4 align-bottom text-center self-center' ><a href="/" id='home' className='text-slate-400 hover:text-white hover:font-bold rounded-l-lg hover:tracking-widest'>Home</a></li>
              <li className='basis-1/4 align-bottom text-center self-center	'><a href="/" id='events' className='text-slate-400 hover:text-white hover:font-bold  decoration-2 hover:tracking-widest'>Events</a></li>
              <a href="/">
              <img src={head} className='basis-1/2 scale-80 hover:opacity-80 hover:scale-85 ' alt="" />
              </a>
              <li className='basis-1/4 align-bottom text-center self-center	'><a href="/" id='about' className='text-slate-400 hover:text-white hover:font-bold hover:tracking-widest'>About</a></li>
              <li className='basis-1/4 align-bottom text-center self-center	'><a href="/" id='contact' className='text-slate-400 hover:text-white hover:font-bold  rounded-r-lg hover:tracking-widest' >Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className='bg-clip-padding self-center scale-70' >
          <h3 className='font-semibold text-8xl text-white '>WELCOME TO THE</h3>
          <video autoPlay loop muted plays-inline="true" id='video' className='opacity-50 absolute -z-[1]'> <source src={main} type='video/mp4' /> </video>
        </div>
      </div>
    )
}

export default App;
