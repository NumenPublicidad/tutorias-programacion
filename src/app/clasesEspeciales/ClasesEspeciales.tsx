import { TfiAlarmClock } from 'react-icons/tfi';

export const ClasesEspeciales = ({ ClasesEspeciales }) => {
	return (
		<div className='flex flex-col justify-between border border-gray-300 rounded-md shadow-md'>
			<div className='flex flex-col w-full items-center'>
				<h2 className='text-xl w-full text-center font-bold bg-black text-white p-3 rounded-t-lg'>
					{ClasesEspeciales.name}
				</h2>
				<h3 className='text-lg mb-2 text-white'>
					{ClasesEspeciales.day}
				</h3>
				<h3
					className='text-lg mb-2 font-bold text-indigo-500 items-center'
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<TfiAlarmClock className='mr-2' />
					{ClasesEspeciales.hour}
				</h3>

				<h3 className='text-lg mb-2 text-indigo-400'>
					{`Profesor: ${ClasesEspeciales.teacher}`}
				</h3>
			</div>
			<div className='flex justify-center'>
				<a
					href={ClasesEspeciales.zoom}
					className='text-white p-3'
				>
					<button className='bg-blue-500 md:px-3 md:py-2 px-3 py-1 lg:px-3 rounded-xl hover:bg-white hover:text-blue-600 hover:font-bold'>
						Enlace de la reunión
					</button>
				</a>
			</div>
		</div>
	);
};
