import Fields from './layouts/Fields';
import Form from './layouts/Form';
import FieldsData from './assets/_fields.json';
import { useState } from 'react';

function App() {
	const [fieldsForm, setFieldsForm] = useState([]);

	return (
		<div className='bg-black text-blue-400 min-h-screen flex flex-row gap-20 justify-center p-4'>
			<div className='w-full'>
				<Fields fields={FieldsData} setForm={setFieldsForm} />
			</div>
			<div className=' border-solid border-2 border-slate-800 w-full rounded-2xl'>
				<Form fields={fieldsForm} setForm={setFieldsForm} />
			</div>
		</div>
	);
}

export default App;
