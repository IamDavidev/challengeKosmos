const OptionsCustom = ({ type, name }) => {
	return (
		<div className='flex gap-2'>
			<input type={type} id={name} />
			<label className='uppercase'> {name}</label>
		</div>
	);
};

export default OptionsCustom;
