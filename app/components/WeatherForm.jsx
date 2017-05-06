var React = require('react');

var WeatherForm = React.createClass({
  getWeatherOnClick: function (event) {
    event.preventDefault();

    var updates = {};

    var refCityWeather = this.refs.city;
    var city = refCityWeather.value;

    if (typeof city === 'string' && city !== ''
        && isNaN(city) && city.length > 1) {
      this.refs.city.value = '';
      this.props.onNewWeatherData(city);
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.getWeatherOnClick}>
          <div>
            <h1 className="text-center title-text">Get Weather</h1>
          </div>
          <div>
            <input type="search" ref="city" placeholder="Enter city name"/>
          </div>
          <div>
            <button className="button primary expanded">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
