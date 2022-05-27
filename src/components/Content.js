import React from "react"
import PigCard from "./PigCard"

function Content({hogs}) {
    //const [showDetail, setShowDetail] =useState(false)

    return (
        <div className="ui four cards">
            {
                hogs.map((hog, index) => {
                   return <PigCard pig={hog} key={index}/>
                })
            }
        </div>
    )
}

export default Content