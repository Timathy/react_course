var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMsg = require('WeatherMsg');
var openWeatherMap = require('openWeatherMap');

/*
 * If you are getting this error, try setting the value to either
 * "inline-source-map" or "eval-source-map" instead.
*/

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },

  handleWeatherData: function (city) {
    var self = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(city).then(function (temp) {
      self.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (errMsg) {
      self.setState({isLoading: false});
      console.log(errMsg);
    });
  },

  render: function () {
    var {isLoading, temp, city} = this.state;

    function renderMsg() {
      if (isLoading) {
        return <h3 className="text-center">Fetching data...</h3>
      } else if (temp && city) {
        return <WeatherMsg temp={temp} city={city}/>
      }
    }

    return (
      <div>
        <WeatherForm onNewWeatherData={this.handleWeatherData}/>
        {renderMsg()}
      </div>
    );
  }
});

module.exports = Weather;
