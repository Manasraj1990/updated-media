import React from 'react'

export default function Loader() {
    return (
        <div className='text-center' style={{ height: "100vh", paddingTop: "20%" }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
