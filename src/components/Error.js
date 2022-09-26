import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div className='text-center' style={{ height: "100vh", paddingTop: "20%" }}>
                <h1>There is some technical error on the site.<br/>Please try again later!</h1>

            </div>
        )
    }
}
