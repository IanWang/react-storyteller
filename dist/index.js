'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Storyteller = function (_Component) {
  _inherits(Storyteller, _Component);

  function Storyteller(props) {
    _classCallCheck(this, Storyteller);

    var _this = _possibleConstructorReturn(this, (Storyteller.__proto__ || Object.getPrototypeOf(Storyteller)).call(this, props));

    _this.state = {
      story: ''
    };
    return _this;
  }

  _createClass(Storyteller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._generateStory();
    }
  }, {
    key: 'render',
    value: function render() {
      var story = this.state.story;
      var children = this.props.children;


      return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(
          'div',
          null,
          children
        ),
        React.createElement('style', { dangerouslySetInnerHTML: { __html: story } }),
        React.createElement(
          'div',
          { style: { whiteSpace: 'pre-line' } },
          story
        )
      );
    }
  }, {
    key: '_generateStory',
    value: function _generateStory() {
      var narrative = this.props.narrative;


      var MAX = 500; // prevent infinite loop...
      var display = '';
      var tryTime = 0;
      var that = this;

      return function getText(index) {

        if (display.length < narrative.length && tryTime < MAX) {
          tryTime++;

          var newChar = narrative.charAt(index);
          display += newChar;

          that.setState({ story: display });
          return setTimeout(function () {
            return getText(index + 1);
          }, 30);
        }
      };
    }
  }]);

  return Storyteller;
}(_react.Component);

Storyteller.propType = {
  narrative: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = Storyteller;