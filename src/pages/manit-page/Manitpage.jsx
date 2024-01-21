import React from 'react'
import Hero from '../../components/hero/Hero';
import Poempart from '../../components/poem/Poem';
import About from '../../components/about/About';

const Manitpage = () => {
  return (
    <React.Fragment>
        <Hero />
        <About />
        <Poempart />
    </React.Fragment>
  )
}

export default Manitpage