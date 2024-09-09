import React from 'react';
import Header from '../components/Header';
 
import Footer from '../components/Footer';
import About from '../components/About';
import NavBar from '../components/navBar';


const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <main>
        <About />
      </main>
      <Footer />
     </div> 
  
  );
};

export default Home;

