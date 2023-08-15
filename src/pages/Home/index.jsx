import React, { useState } from "react";
import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
	const [studentName, setStudentName] = useState();

	return (
		<div className="container">
			<h1>Lista de Presença {studentName}</h1>

			<input
				type="text"
				name=""
				id=""
				placeholder="Digite o nome..."
				onChange={(e) => setStudentName(e.target.value)}
			/>
			<button type="button">Adicionar</button>
			<Card name="Pedro" time="10:55:20" />
			<Card name="Beatriz" time="13:15:10" />
			<Card name="Ana" time="20:13:06" />
		</div>
	);
}
