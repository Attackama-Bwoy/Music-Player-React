import React, { useState } from "react";
import {
	BsFillPlayCircleFill,
	BsFillPauseCircleFill,
	BsFillCaretRightSquareFill,
	BsFillCaretLeftSquareFill,
} from "react-icons/bs";
import { Audio } from "./Audio.jsx";

export const Buttons = ({ selected = [] }) => {
	const [toggle, setToggle] = useState(false);
	const songURL =
		"https://assets.breatheco.de/apis/sound/" + selected.item.url;

	function playSong() {
		document.getElementById(selected.index).play();
		console.log(selected.index);
		setToggle(true);
	}

	function pauseSong() {
		document.getElementById(selected.index).pause();
		document.getElementById(selected.index + 1).pause();
		document.getElementById(selected.index - 1).pause();
		setToggle(false);
	}

	function nextSong() {
		document.getElementById(selected.index).pause();
		document.getElementById(selected.index + 1).play();
		setToggle(true);
	}

	function prevSong() {
		document.getElementById(selected.index).pause();
		document.getElementById(selected.index - 1).play();
		setToggle(true);
	}

	return (
		<>
			<div className="sticky-bottom fs-1 pb-3">
				<div className="row">
					<div className="col-5 text-end">
						<BsFillCaretLeftSquareFill
							onClick={() => prevSong()}
							selected={selected}
						/>
					</div>
					<div className="col-2 text-center">
						{toggle == false ? (
							<BsFillPlayCircleFill
								onClick={() => playSong()}
								selected={selected}
							/>
						) : (
							<BsFillPauseCircleFill
								onClick={() => pauseSong()}
								selected={selected}
							/>
						)}
					</div>
					<div className="col-5">
						<BsFillCaretRightSquareFill
							onClick={() => nextSong()}
							selected={selected}
						/>
					</div>
				</div>
			</div>
			{/* <Audio selected={selected} /> */}
		</>
	);
};
