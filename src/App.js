import React from 'react'
import './app.css'
import { Blog,Feture,Footer,Header,Posibility,Whatsgpt } from './containers';
import { Navbar,Brand, Cta} from './components';

function App() {
  return (
   <>
      <div className='app'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <Whatsgpt/>
        <Feture/>
        <Posibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
   </>
  );
}

export default App;
