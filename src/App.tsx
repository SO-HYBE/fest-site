import React from 'react';
import './App.css';
import head from './images/head.png'
import main from './videos/ultima.mp4'
function App() {

  const observer = new IntersectionObserver((entries:any) => {
    entries.forEach((entry:any) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('boooo');
        } else {
          entry.target.classList.remove('boooo');
        }
    });
  });

  const hiddenElements = document.querySelectorAll('.unknown');
  hiddenElements.forEach((el) => observer.observe(el));

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
        <div className='bg-clip-padding w-full whitespace-pre' >
          <video autoPlay loop muted plays-inline="true" id='video' className='opacity-50 absolute -z-[1] self-center w-full'> <source src={main} type='video/mp4' /></video>
          <h3>
          <span className='font-semibold text-5xl text-white inline-block self-center w-50 mt-44 ml-[350px] '>WELCOME TO THE</span>
          <br />
          <span className='font-bold text-[180px] text-white inline-block self-center w-50 mt-30 ml-[400px] '>"EXTRA</span>
          <br />
          <span className='font-bold text-[180px] text-white inline-block self-center w-50 mt-30 ml-[400px] '> ORDINARY"</span>
          <br />
          <span className='font-bold text-6xl text-mid-gray inline-block self-center w-50 mt-[50px] ml-[300px] whitespace-pre'>AN </span>
          <span className='font-bold text-6xl text-mid-gray inline-block self-center w-50 mt-[50px] whitespace-pre'>EXCEPTIONAL </span>
          <span className='font-bold text-6xl text-mid-gray inline-block self-center w-50 mt-[50px] whitespace-pre'>EVENT </span>
          <span className='font-bold text-6xl text-mid-gray inline-block self-center w-50 mt-[50px] whitespace-pre'>MANAGMENT </span>
          <span className='font-bold text-6xl text-mid-gray inline-block self-center w-50 mt-[50px] whitespace-pre'>AGENCY  </span>          
          </h3>
        </div>
        <div></div>
      </div>
    )
}

export default App;
