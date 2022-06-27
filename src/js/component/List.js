import React, { useState, useRef } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Audio } from "./Audio.jsx";

export const List = ({ music = [], setSelected }) => {
	return music.map((item, index) => (
		<li
			key={index}
			value={item.url}
			className="p-2 fs-5 text-white bg-dark border border-secondary border-1 row"
			onClick={() => setSelected({ item, index })}>
			<div className="col-1">{index + 1}</div>
			<div className="col-11">{item.name}</div>
			<audio
				src={"https://assets.breatheco.de/apis/sound/" + item.url}
				id={index}></audio>
		</li>
	));
};
