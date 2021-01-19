import React, { Component } from 'react'
import Header from 'parts/Header'

import moduleName from 'elements/Button'
export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
            </>
        )   
    }
}
