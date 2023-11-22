import { ClasesEspeciales } from './ClasesEspeciales';
import { clasesEspecialesData } from '../constants/clases_esp';

export default function ClasesEspecialesPage(): any {
	return (
		<div className='flex flex-col items-center justify-between p-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center'>
			{clasesEspecialesData.map((clase, index) => (
				<div
					key={index}
					className='flex-shrink-0 w-10/12 bg-blue-200 rounded-tl-lg rounded-br-lg'
				>
					<ClasesEspeciales ClasesEspeciales={clase} />
				</div>
			))}
		</div>
	);
}
