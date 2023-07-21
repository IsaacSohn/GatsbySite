import React from 'react';
import { Link } from 'gatsby';

const index = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Link to="/page1">Go to About page</Link>
    </div>
  );
};

export default index;
