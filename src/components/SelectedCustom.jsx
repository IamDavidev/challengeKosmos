export const SelectedCustom = ({ name, options }) => {
	return (
		<label className='flex flex-col'>
			<span className='uppercase'>{name}</span>
			<select name={name} className='bg-zinc-800  p-2'>
				{options.map(option => {
					return (
						<option value={option.label} className='bg-white' key={option.name}>
							{option.value}
						</option>
					);
				})}
			</select>
		</label>
	);
};
