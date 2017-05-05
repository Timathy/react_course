var React = require('react');

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
    var modal = new Foundation.Reveal(jQuery('#error-modal'));
    modal.open();
  },

  render: function () {
    var {title, message} = this.props;
    return (
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
  }
});

module.exports = ErrorModal;
