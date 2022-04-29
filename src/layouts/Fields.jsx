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
			<h2 className='text-2xl text-center '>Campos disponibles</h2>
			{fields.map(field => {
				return (
					<div
						className='bg-zinc-800 my-4 px-4 py-2 rounded-2xl'
						key={field._uid}>
						<p className=''>
							Nombre :
							<span className='font-bold text-white mx-2 first-letter:uppercase'>
								{field.label}
							</span>
						</p>
						<p className=''>
							Tipo :{' '}
							<span className=' font-bold text-white mx-2 first-letter:uppercase'>
								{field.type}
							</span>
						</p>
						<button
							onClick={() => handleAddFields(field)}
							className='bg-green-600 block border-0 p-2 text-black rounded my-2'>
							agregar campo
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Fields;
