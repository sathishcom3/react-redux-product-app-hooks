import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Product App</h1>
    <p>
      This product app is made to demo
      <a target="_blank" href="https://medium.com/@codingindepth">
        {' '}
        Coding In Depth
      </a>{' '}
      stories.
    </p>
    <Link
      to={{
        pathname: `/404`,
        state: { from: 'Home' },
      }}
    >
      Check 404
    </Link>
  </div>
);

export default HomePage;
