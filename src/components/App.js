import React,{useState} from "react";
import Nav from "./Nav";
import Content from "./Content"
import hogs from "../porkers_data";
import Filter from "./Filter"

function App() {
	const[showGreased, setShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState("Weight")

	const hogsToRender = hogs
	.filter((hog) => (showGreased? hog.greased : true))
	.sort((hog1, hog2) => {
		if(sortBy === "Weight") {
			return hog1.weight - hog2.weight
		} else {
			return hog1.name.localeCompare(hog2.name)
		}

	})

	

	return (
		<div className="ui grid container App">
			
			<div className="sixteen wide column centered">
				<Nav />
			</div>
			<div>
				<Filter showGreased={showGreased} onGreaseChange={setShowGreased} sortBy={sortBy} sortChange={setSortBy}/>
			</div>
			<div className="sixteen wide column centered">
				<Content hogs={hogsToRender}/>
			</div>
		</div>
	);
}

export default App;
