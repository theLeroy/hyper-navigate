// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
console.log("ass");


export function watch() {
  console.log("asdsda")
}

exports.onWindow = function (window) {
    setTimeout(() => {
        window.sessions.forEach(session => {
            session.write('ls')
            session.write('\x0a')
        })
    }, 25)
}

// exports.decorateTerm = function (term, { React }) {
//
//   const screenNode = term.scrollPort_.getScreenNode();
//   screenNode.addEventListener('click', self.onLinkClick.bind(self));
// }

exports.decorateTerm = (Term, { React, notify }) => {
  // Define and return our higher order component.
  return class extends React.Component {
    onCursorMove (cursorFrame) {
      // Don't forget to propagate it to HOC chain
      if (this.props.onCursorMove) this.props.onCursorMove(cursorFrame);

      const { x, y, width, height, col, row } = cursorFrame;
      /* Awesome cursor feature */
    }
  }
}
