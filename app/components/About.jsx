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
      <h2 className="text-center title-text">About </h2>
      <p className="welcome-text text-center title-text--about-text">
        Welcome to the About page for the React Weather!
        <br/><br/>
        The React Weather app uses an API that fetches weather data
        and displays the temperature on the screen for your hometown.
        <br/><br/>
        React Weather uses the API from &nbsp;
        <a href="http://openweathermap.org/" target="blank">Open Weather Map</a>&nbsp;
        and returns the result to you!
      </p>
    </div>
  );
};

module.exports = About;
