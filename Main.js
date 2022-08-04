import React, { useState } from "react";
import "./App.css";

const Main = () => {
	const [inputList, setInputList] = useState("");
	const [items, setItems] = useState([]);

	const itemEvent = (event) => {
		setInputList(event.target.value);
	};
	const List = () => {
		setItems((olditems) => {
			return [...olditems, inputList];
		});
		setInputList("");
	};

	return (
		<div className="Main">
			<div className="inputbutton">
				<input
					className="inputfield"
					type="text"
					placeholder="Add Details"
					onChange={itemEvent}
				/>
				<button className="Addbutton" type="submit" onClick={List}>
					Add
				</button>
			</div>

			<div className="cointer">
				<ol>
					{items.map((itemv) => {
						return <li>{itemv}</li>;
					})}
				</ol>
			</div>
		</div>
	);
};

export default Main;
