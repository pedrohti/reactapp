import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
	return (
		<div className="container">
			<h1>Lista de Presença</h1>
			<input type="text" name="" id="" placeholder="Digite o nome..." />
			<button type="button">Adicionar</button>
			<Card name="Pedro" time="10:55:20" />
			<Card name="Beatriz" time="13:15:10" />
		</div>
	);
}
