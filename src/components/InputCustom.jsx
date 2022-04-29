const InputCustom = ({ type, name }) => {
	return (
		<label className='flex flex-col'>
			<span className='uppercase'>{name} : </span>
			<input
				type={type}
				name={name}
				className='outline-none p-2 rounded-md bg-zinc-800'
			/>
		</label>
	);
};

export default InputCustom;
