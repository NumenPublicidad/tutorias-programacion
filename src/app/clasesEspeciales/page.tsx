import { ClasesEspeciales } from './ClasesEspeciales';
import { clasesEspecialesData } from '../constants/clases_esp';

export default function ClasesEspecialesPage(): any {
	return (
		<div className='w-full p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12	 '>
			{clasesEspecialesData.map((clase, index) => (
				<div
					key={index}
					className=''
				>
					<ClasesEspeciales ClasesEspeciales={clase} />
				</div>
			))}
		</div>
	);
}
