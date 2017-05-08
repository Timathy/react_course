var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

const ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  componentDidMount: function () {
    var {title, message} = this.props;

    var modalComponent = (
      <div id="error-modal" className="tiny reveal text-center" data-reveal="">
        <h3>{title}</h3>
        <p>Error: {message}</p>

        <p>
          <button className="button primary" data-close="">
            Close
          </button>
        </p>
      </div>
    );

    var $modal = jQuery(ReactDOMServer.renderToString(modalComponent));
    jQuery(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal(jQuery('#error-modal'));
    modal.open();
  },

  render: function () {
    return (
      <div></div>
    );
  }
});

module.exports = ErrorModal;
