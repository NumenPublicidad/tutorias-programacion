import { TfiAlarmClock } from 'react-icons/tfi';

export const ClasesEspeciales = ({ ClasesEspeciales }) => {
	return (
		<div className='flex flex-col justify-between border border-gray-300 rounded-md shadow-md'>
			<div className='flex flex-col w-full items-center'>
				<h2 className='text-xl w-full font-bold bg-black text-white p-3 rounded-t-lg'>
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
					className='text-blue-500'
				>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded'>
						Enlace de la reunión
					</button>
				</a>
			</div>
		</div>
	);
};
