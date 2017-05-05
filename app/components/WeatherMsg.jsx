var React = require('react');

var WeatherMsg = ({temp, city}) => {
  return (
    <div>
      <p className="text-center welcome-text">It's {temp}C degrees in {city}</p>
    </div>
  );
};

module.exports = WeatherMsg;
