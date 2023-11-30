import { TfiAlarmClock } from 'react-icons/tfi';

export const ClasesEspeciales = ({ ClasesEspeciales }) => {
	return (
		<div className='flex flex-col h-full justify-between rounded-lg shadow-md'>
			<div className='ml: flex flex-col h-28 w-full place-content-center items-center bg-white rounded-t-lg p-3'>
				<h2 className='text-xl w-full text-center font-bold  text-black'>
					{ClasesEspeciales.name}
				</h2>
			</div>
			<div className='h-1/2 border rounded-b-lg'>
				{/* <h3 className='text-lg mb-2 text-white'>
					{ClasesEspeciales.day}
				</h3> */}
				<h3
					className='pt-2 text-lg mb-2 font-bold text-indigo-500 items-center'
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<TfiAlarmClock className='mr-2' />
					{ClasesEspeciales.hour}
				</h3>

				{/* <h3 className='text-lg mb-2 text-indigo-400'>
					{`Profesor: ${ClasesEspeciales.teacher}`}
				</h3> */}

				<div className='flex justify-center'>
					<a
						target={'_blank'}
						href={ClasesEspeciales.zoom}
						className='text-white p-3'
					>
						<button className='bg-blue-500 md:px-3 md:py-2 px-3 py-1 lg:px-3 rounded-xl hover:bg-white hover:text-blue-600 hover:font-bold'>
							Enlace de la clase
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};
