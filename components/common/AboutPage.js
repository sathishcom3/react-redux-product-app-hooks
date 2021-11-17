import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>
      For more details visit our website Coding In Depth Click the below link
    </p>
    <a target="_blank" href="https://medium.com/@codingindepth">
      Coding In Depth
    </a>
    <br />
    <Link to={{ pathname: `/404`, state: { from: 'About' } }}>Check 404</Link>
  </div>
);

export default AboutPage;
