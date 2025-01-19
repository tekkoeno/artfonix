import React from 'react';

import Events from '../components/Events';
import Premiers from '../components/Premiers';

import Feedback from '../components/Feedback';
import Socials from '../components/Socials';
import Shows from '../components/Shows';

const Home = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__info">
            <h2 className="main__info-title">Шоу начинается!</h2>
            <p className="main__info-text">
              «Artfonix» - это принципиально новая категории концертов, <br />
              силами и опытом признанных мастеров <br />
              своего дела.
            </p>
          </div>

          <div></div>
        </div>
      </main>
      <Premiers />
      <Events />
      <Shows />
      <Feedback />
      <Socials />
    </>
  );
};

export default Home;
