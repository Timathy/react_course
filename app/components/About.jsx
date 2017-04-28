var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h4>About component</h4>
//     );
//   }
// });

const About = (props) => {
  return (
    <div>
      <h4>About component</h4>
      <p className="welcome-text">Welcome to the About page!</p>
    </div>
  );
};

module.exports = About;
