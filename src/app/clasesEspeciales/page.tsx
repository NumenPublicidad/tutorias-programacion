import { ClasesEspeciales } from './ClasesEspeciales';
import { clasesEspecialesData } from '../constants/clases_esp';

export default function ClasesEspecialesPage(): any {
	return (
		<div className='flex flex-col w-full items-center justify-between p-10 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center'>
			{clasesEspecialesData.map((clase, index) => (
				<div
					key={index}
					className='flex-shrink-0 w-10/12 rounded-md border-white'
				>
					<ClasesEspeciales ClasesEspeciales={clase} />
				</div>
			))}
		</div>
	);
}
