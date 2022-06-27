import React, { useState, useEffect, useRef } from "react";
import { List } from "./List";
import { Buttons } from "./Buttons.jsx";

const MusicList = () => {
	const [music, setMusicList] = useState();
	const [selected, setSelected] = useState({
		item: {
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3",
		},
		index: 0,
	});

	const onSubmit = async () => {
		const resp = await fetch(
			`https://assets.breatheco.de/apis/sound/songs`,
			{
				method: "GET",
				headers: { "Content-Type": "application/json" },
			}
		)
			.then((res) => res.json())
			.then((response) => {
				console.log("Success:", response);
				setMusicList(response);
			})
			.catch((error) => console.error("Error:", error));
	};

	useEffect(() => {
		onSubmit();
	}, []);

	return (
		<div>
			<List music={music} setSelected={setSelected} />
			<div>
				<Buttons
					selected={selected}
					setSelected={setSelected}
					setMusicList={setMusicList}
				/>
			</div>
		</div>
	);
};

export default MusicList;
