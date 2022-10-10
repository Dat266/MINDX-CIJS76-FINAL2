import axios from "axios";
import React, { useEffect, useState } from "react";
import { Micro } from "../Resources/Icon";

const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const mic = new SpeechRecognition();
mic.lang = "vi-VI";
mic.continuous = false;

const MicroSearch = ({ setCity, setData }) => {
	const [isListening, setIsListening] = useState(false);

	useEffect(() => {
		handleListen();
	}, [isListening]);

	const handleListen = () => {
		if (isListening) {
			mic.start();
			mic.onend = () => {
				console.log("continue..");
				mic.start();
			};
		} else {
			mic.stop();
			mic.onend = () => {
				console.log("Stopped Mic on Click");
			};
		}
		mic.onstart = () => {
			console.log("Mics on");
		};

		mic.onresult = (event) => {
			const text = event.results[0][0].transcript;
			handleVoice(text);
		};
	};

	const handleVoice = async (text) => {
		setCity(text);
		const res = await axios({
			method: "GET",
			url: `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=ec36e374709a52512f4459ac354307d8&units=metric`,
		});

		setData(res?.data);
		setCity("");
	};

	return (
		<div>
			<Micro onclick={() => setIsListening((prevState) => !prevState)} />
		</div>
	);
};

export default MicroSearch;
