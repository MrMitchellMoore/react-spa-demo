import React from 'react';
import Seo from '../../seo';

export default function AboutPage({counter}) {
  return (
    <React.Fragment>
      <Seo title="About-Us" />
      <h1>About Us</h1>
      <p>You visited {counter} times!</p>
    </React.Fragment>
  );
}
