var React = require('react');
var {Link} = require('react-router');

const Examples = (props) => {
  return (
    <div>
      <h2 className="text-center title-text">Examples</h2>
      <p className="welcome-text text-center">How to use the React Weather app:</p>
      <ol className="menu">
        <li className="menu-text text-center">
          <Link to="/?location=Berlin">Berlin, DE</Link>
        </li>

        <li className="menu-text text-center">
          <Link to="/?location=Tokyo">Tokyo, JP</Link>
        </li>

        <li className="menu-text text-center">
          <Link to="/?location=Skopje">Skopje, MK</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
