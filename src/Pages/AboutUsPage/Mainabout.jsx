import React from 'react';
import "./Mainabout.css";
import Subabout1 from './Subabout1';
import Subabout2 from './Subabout2';
import Subabout3 from './Subabout3';
import Subabout4 from './Subabout4';
import Subabout5 from './Subabout5';
import Subabout6 from './Subabout6';
import { Footer } from '../../components';



const Mainabout = () => {
  return (
    <section>
    <Subabout1 />
    <Subabout2 />
    <Subabout3 />
    <Subabout4 />
    <Subabout5 />
    <Subabout6 />
    <Footer />
    </section>
  )
}

export default Mainabout