import React from 'react';
import CarritoNav from './Carrito/CarritoNav';
import LogoNombre from './Logo-Nombre/Logo-nombre';
import ItemsNav from './Secciones/ItemsNav';
import MenuDesplegableNav from './Secciones/MenuDesplegableNav';

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <LogoNombre/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent: 'space-between'}}>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <ItemsNav/>
                        <MenuDesplegableNav/>
                    </ul>
                    <CarritoNav/>   
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;