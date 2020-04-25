import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Carrusel from '../components/Carrusel';
import Footer from '../components/Footer';
import CarruselItem from '../components/CarruselItem';
import Categories from '../components/Categories';
const App= () =>{
    return (
        <div className="App">
          <Header />
          <Search />
          <Categories>
            <Carrusel >
              <CarruselItem />
              <CarruselItem />
              <CarruselItem />
            </Carrusel>
          </Categories>
          <Footer />


        </div>
    );

}
export default App;
