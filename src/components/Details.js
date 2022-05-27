import React from "react"

function Details({pig}) {
    const {greased, weight,"highest medal achieved": medal, specialty} = pig
    return (
        <>
        <div className="description">
            <strong>{greased? "Greased" : "Not greased"}</strong>
            <p><strong>Specialty</strong>: {specialty}</p>
            <p>Highest medal achieved: {medal}</p>
            <p>Weight: <strong>{weight}</strong></p>
        </div>
        </>
    )
}

export default Details