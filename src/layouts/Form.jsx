import InputCustom from '../components/InputCustom';
import RadioCustom from '../components/RadioCustom';
import { SelectedCustom } from '../components/SelectedCustom';

const Form = ({ fields, setForm }) => {
	console.log('form', fields);
	const handleRemoveField = (uid, e) => {
		e.preventDefault();
		setForm(prevState => prevState.filter(field => field._uid !== uid));
	};
	return (
		<>
			<form className='p-4 flex flex-col gap-4'>
				<h2 className='text-2xl text-center'>fomulario</h2>
				{fields.map(field => {
					return (
						<div className='flex gap-4 items-center' key={field._uid}>
							{field.component === 'select' && (
								<SelectedCustom name={field.label} options={field.options} />
							)}
							{field.component === 'input' && (
								<InputCustom type={field.type} name={field.label} />
							)}
							{field.component === 'options' && (
								<RadioCustom type={field.type} name={field.label} />
							)}
							<button
								onClick={e => handleRemoveField(field._uid, e)}
								className='bg-red-500 p-2  text-black rounded-lg'>
								Eliminar campo
							</button>
						</div>
					);
				})}
			</form>
		</>
	);
};

export default Form;
