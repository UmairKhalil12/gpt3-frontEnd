import './App.css';
import './index.css'
import { CTA, Brand, Navbar } from './Components';
import { Footer, Blog, WhatGPT3, Features, Headers, Possibility } from './Containers';

function App() {
  return (
    <div className="App">
      <div className='gradient-bg'>
        <Navbar />
        <Headers />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features /> 
      <Possibility /> 
      <CTA /> 
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
