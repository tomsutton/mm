 // runs both client and server
import '../collections.js'
import '/imports/api/methods/optimistic.js'

// import app
import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import Router from '../../ui/Router.jsx'

Meteor.startup(() => {
    render(
        <Router/>,
        document.getElementById('react-root')
    )
})
