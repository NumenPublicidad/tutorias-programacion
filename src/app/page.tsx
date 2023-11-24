import React from 'react';
// import Cards from './tutorias/page'
import { Tutorias } from './components/Tutorias';
import { tutoriasData } from './constants/constants';

export default function Home(): any {
	return (
		<main className='grid  md:grid-cols-2 sm:grid-cols-1 gap-8 text-black object-contain sm:w-full mt-5 sm:mx-auto md:w-full md:mt-16 lg:w-[80%] '>
			{tutoriasData.map(tutoria => (
				<Tutorias key={tutoria.id} tutoria={tutoria} />
			))}
		</main>
	);
}
