import "./style.css";

// export function Card(props) {
export function Card({ name, time }) {
	return (
		<div className="card">
			<strong>{name}</strong>
			<small>{time}</small>
			{/* <strong>{props.name}</strong>
			<small>{props.time}</small> */}
		</div>
	);
}
