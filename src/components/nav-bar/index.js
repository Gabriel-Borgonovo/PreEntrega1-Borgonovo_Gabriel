import React, { useState } from 'react';
import WidgetCart from '../widget-cart';
import "./styles.css"

export default function NavBar(){

    const [click, setClick] = useState(false);

    const ShowMenu = () =>{
        setClick(!click); 
        console.log("Estoy haciendo click al menu de hamburguesa");
    } 

    return(
        <header className="header">
            <h2 className="h2"><a href="index.html">Logo</a></h2>

            <button className="button" onClick={ShowMenu}>
                <i className="fa-solid fa-bars burguer_menu"></i>
            </button>

            <WidgetCart />

            <nav className={click ?'header_nav nav_hidden' : 'header_nav'}>
                <ul className="nav_ul">
                    <li className="nav_ul_li"><a href="index.html">Inicio</a></li>
                    <li className="nav_ul_li"><a href="index.html">Nosotros</a></li>
                    <li className="nav_ul_li"><a href="index.html">Ofertas</a></li>
                    <li className="nav_ul_li"><a href="index.html">Contacto</a></li>
                </ul>
            </nav> 

        </header>
    );
}