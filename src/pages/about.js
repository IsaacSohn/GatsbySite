import React from 'react';
import { Link } from 'gatsby';

const about = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page content.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default about;
