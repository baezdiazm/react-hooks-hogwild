import React,{useState} from "react"
import Details from "./Details"

function PigCard({pig}) {
    const [showDetail, setShowDetail] = useState(false)
    const [hidden, setHidden] = useState(false)

    if(hidden) return null

    function handleClick() {
        setShowDetail((showing) => !showing)
    }
    return (
        <div className="ui card eight wide column pigTile" onClick={handleClick}>
            <div className="image">
				<img src={pig.image} alt="hogPic" />
            </div>
            <div className="content">
                <h3 className="header">{pig.name} </h3>
            </div>
            <div className="extra content">
                {showDetail? <Details pig={pig} /> : null}
            </div>
        </div>
    )
}

export default PigCard