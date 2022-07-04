import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Produtos from './Components/Produtos'

const App = () => {
    
    let Pagina = Produtos
    const {pathname} = window.location
    if (pathname === '/produtos'){
        Pagina = Produtos
    }if (pathname === '/'){
        Pagina = Home
    }

    return (
        <>
            <Header />
            <Pagina />   
        </>
    )
}

export default App