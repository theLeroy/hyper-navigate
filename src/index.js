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
