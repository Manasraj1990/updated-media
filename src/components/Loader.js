import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
        <div className='text-center' style={{height: "100vh",paddingTop: "20%"}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}
