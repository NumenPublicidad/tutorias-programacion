import { NavBar } from './components/Navbar';
import { ClasesEspeciales } from './clasesEspeciales/ClasesEspeciales';
import { clasesEspecialesData } from './constants/clases_esp';

export default function Home(): any {
	return (
		<main className='bg-black'>
			<NavBar />
			<div className='flex flex-col items-center justify-between p-10 pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 w-full justify-center'>
				{clasesEspecialesData.map((clase, index) => (
					<div
						key={index}
						className='flex-shrink-0 w-full bg-blue-200'
					>
						<ClasesEspeciales ClasesEspeciales={clase} />
					</div>
				))}
			</div>
		</main>
	);
}
