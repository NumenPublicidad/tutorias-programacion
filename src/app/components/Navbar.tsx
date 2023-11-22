import Link from 'next/link';
import Image from 'next/image';

export function NavBar(): any {
	return (
		<div className='flex justify-between bg-sky-800 w-full text-center'>
			<div className='pl-5 pt-5 pb-2'>
				<Image
					src='/logo.jpg'
					alt='Academia Numen'
					width={200}
					height={100}
				/>
			</div>
			<div className='flex justify-evenly items-center mr-10'>
				<ul className=' flex flex-wrap space-x-8 text-base text-white'>
					<li className='mr-2'>
						<Link
							href='/tutorias'
							className='p-3 inline-block hover:text-black'
						>
							Tutorias
						</Link>
					</li>
					<li className='mr-2 '>
						<Link
							href='/clasesEspeciales'
							className='p-3 inline-block hover:text-black'
						>
							Clases especiales
						</Link>
					</li>
					<li>
						<Link
							href='/'
							className='p-3 inline-block text-gray-400 cursor-not-allowed hover:text-black'
						>
							Examenes
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
