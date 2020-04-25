import React from 'react';
import '../assets/style/Carrusel.scss';

const Carrusel= ({children}) => {
    return(
    <section class="carousel">
        <div class="carousel__container">
            {children}
        </div>
    </section>
    )
} 
export default Carrusel;