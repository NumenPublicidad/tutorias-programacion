export const ClasesEspeciales = ({ ClasesEspeciales }) => {
	return (
		<div className='flex flex-col justify-between p-4 border border-gray-300 rounded-md shadow-md'>
			<div className='flex flex-col'>
				<h2 className='text-xl font-bold mb-2'>
					{ClasesEspeciales.name}
				</h2>
				<h3 className='text-lg mb-2 font-bold text-indigo-500'>
					{ClasesEspeciales.hour}
				</h3>
				<h3 className='text-lg mb-2'>
					{`Profesor: ${ClasesEspeciales.teacher}`}
				</h3>
			</div>
			<div className='flex justify-center'>
				<a
					href={ClasesEspeciales.zoom}
					className='text-blue-500'
				>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
						Enlace de la reunión
					</button>
				</a>
			</div>
		</div>
	);
};
