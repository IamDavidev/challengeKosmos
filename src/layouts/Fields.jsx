import { v4 as uuidv4 } from 'uuid';

const Fields = ({ fields, setForm }) => {
	const handleAddFields = field => {
		const newField = {
			...field,
			_uid: uuidv4(),
		};
		setForm(prevState => [...prevState, newField]);
	};

	return (
		<div className=''>
			<h2 className='text-2xl text-center '>Available fields</h2>
			<div className='grid grid-col-1 sm:grid-cols-2 gap-4 my-8'>
				{fields.map(field => {
					return (
						<div className='bg-zinc-800 px-4 py-2 rounded-2xl' key={field._uid}>
							<p className=''>
								Name :
								<span className='font-bold text-white mx-2 first-letter:uppercase'>
									{field.label}
								</span>
							</p>
							<p className=''>
								Type :{' '}
								<span className=' font-bold text-white mx-2 first-letter:uppercase'>
									{field.type}
								</span>
							</p>
							<button
								onClick={() => handleAddFields(field)}
								className='bg-green-600 block border-0 p-2 text-black rounded my-2'>
								add field
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Fields;
