import { TfiAlarmClock } from 'react-icons/tfi';

// Define una interfaz para describir la forma de los datos esperados
interface ClasesEspecialesProps {
	name: string;
	hour: string;
	zoom: string;
}

export const ClasesEspeciales: React.FC<{
	ClasesEspeciales: ClasesEspecialesProps;
}> = ({ ClasesEspeciales }): JSX.Element => {
	return (
		<div className='flex flex-col h-auto shadow-md pt-12 w-full mx-auto'>
			<div className=' flex   place-content-center items-center p-3 bg-white h-36 rounded-tl-2xl'>
				<h2 className='text-xl w-full text-center font-bold  text-black'>
					{ClasesEspeciales.name}
				</h2>
			</div>
			<div className='h-36 border border-white/50  p-3 rounded-br-2xl'>
				<div className='flex items-center justify-center pt-3'>
					<h3
						className='text-lg font-bold text-white flex items-center justify-center mb-3'
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<TfiAlarmClock className='mr-2' />
						<p>{ClasesEspeciales.hour}</p>
					</h3>
				</div>
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
