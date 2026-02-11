import React from 'react'
import "./Ourteam.css";
import Subteam1 from './Subteam1';
import Subteam2 from './Subteam2';
import Subteam3 from './Subteam3';
import Subteam4 from './Subteam4';
import Subteam5 from './Subteam5';
import { Footer } from '../../components';

const Ourteam = () => {
  return (
    <section>
      <Subteam1 />
      <Subteam2 />
      <Subteam3 />
      <Subteam4 />
      <Subteam5 />
      <Footer />
    </section>
  )
}

export default Ourteam