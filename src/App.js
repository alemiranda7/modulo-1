import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Produtos from './Components/Produtos'

const App = () => {
    
    // let pagina = Home
    // if(pagina === Home){
    //     return window.location./
    // }

    return (
        <>
            <Header />
            <Home />
            <Produtos />
        </>
    )
}

export default App