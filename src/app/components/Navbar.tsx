// components/Navbar.tsx
import Link from 'next/link';

export function NavBar(): any {
	return (
		<div className='w-full'>
			<ul className='bg-blue-950 rounded-t-lg justify-between flex flex-wrap text-sm font-medium text-center text-white border-b border-gray-200'>
				<li className='mr-2'>
					<Link
						href='/tutorias'
						className='inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-blue-300'
					>
						Tutorias
					</Link>
				</li>
				<li className='mr-2'>
					<Link
						href='/ClasesEspeciales'
						className='inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-blue-300'
					>
						Clases especiales
					</Link>
				</li>
				<li>
					<Link
						href='/'
						className='inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed hover:text-gray-600 hover:bg-blue-300'
					>
						Examenes
					</Link>
				</li>
			</ul>
		</div>
	);
}
