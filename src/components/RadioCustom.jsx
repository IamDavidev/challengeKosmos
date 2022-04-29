const RadioCustom = ({ type, name }) => {
	return (
		<div>
			<input type={type} id={name} />
			<label> {name}</label>
		</div>
	);
};

export default RadioCustom;
