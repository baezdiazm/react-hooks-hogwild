import React from "react"

function Filter({showGreased, onGreaseChange, sortBy, sortChange}) {

    function handleGreaseChange(e) {
        onGreaseChange(e.target.checked)
    }

    function handleSortChange(e) {
        sortChange(e.target.value)
    }
    return (
        <div className="filterWrapper">
            <div className="ui menu">
                <div className="ui item">
                    <label>Sort by:</label>
                    <select onChange={handleSortChange}>
                        <option >Name</option>
                        <option >Weight</option>
                    </select>
                </div>
                <div className="ui item">
                    <label>Greased only?</label>
                </div>
                <div className="ui item">
                    <input type="checkbox" checked={showGreased} onChange={handleGreaseChange}/>
                </div>
            </div>
        </div>
    )
}

export default Filter