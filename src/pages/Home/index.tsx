import React, { useState, useEffect } from "react";
import "./styles.css";
import { Card, CardProps } from "../../components/Card";

type ProfileResponse = {
	name: string;
	avatarUrl: string;
};

type User = {
	name: string;
	avatar: string;
};

export function Home() {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState<CardProps[]>([]);
	const [user, setUser] = useState<User>({} as User);

	function handleAddStudent() {
		const newStudent = {
			name: studentName,
			time: new Date().toLocaleTimeString("pt-br", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			}),
		};
		setStudents((prevState) => [...prevState, newStudent]);
	}

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("https://api.github.com/users/pedrohti");
			const data = (await response.json()) as ProfileResponse;
			setUser({ name: data.name, avatar: data.avatarUrl });
		}

		fetchData();
		// fetch("https://api.github.com/users/pedrohti")
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		setUser({ name: data.name, avatar: data.avatar_url });
		// 	});
	}, []);

	return (
		<div className="container">
			<header>
				<h1>Lista de Presença</h1>
				<div>
					<strong>{user.name}</strong>
					<img src={user.avatar}></img>
				</div>
			</header>

			<input
				type="text"
				name=""
				id=""
				placeholder="Digite o nome..."
				onChange={(e) => setStudentName(e.target.value)}
			/>
			<button type="button" onClick={handleAddStudent}>
				Adicionar
			</button>

			{students.map((student) => (
				<Card key={student.time} name={student.name} time={student.time} />
			))}
		</div>
	);
}
