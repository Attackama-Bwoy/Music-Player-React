import React from "react";

export const Audio = ({ selected = [] }) => {
	return (
		<>
			<audio
				src={
					"https://assets.breatheco.de/apis/sound/" +
					selected.item.url
				}
				id={selected.index}></audio>
		</>
	);
};
