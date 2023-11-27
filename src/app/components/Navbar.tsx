'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export function Navbar() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const onNavLinkClick = () => {
		setTimeout(() => {
			setHamburgerOpen(!hamburgerOpen);
		}, 150);
	};

	return (
		<>
			<header className='max-w-screen bg-blue-950 backdrop-blur-[1px]'>
				<div className='px-6 py-5 flex items-center space-y-0 mx-auto max-w-screen-xl'>
					<div className='flex-grow flex justify-start'>
						<Link href='/'>
							<Image
								src='/logo.jpg'
								alt='Academia Numen'
								width={150}
								height={30}
								priority
							/>
						</Link>
					</div>
					<div className='hidden sm:flex items-center justify-center space-x-6 font-medium text-white tracking-wide'>
						<nav className='flex items-center justify-end space-x-8 text-sm'>
							<Link
								className='rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-violet-300 hover:underline decoration-sky-500 decoration-4 underline-offset-4'
								href='/'
							>
								Tutorias
							</Link>
							<Link
								className='rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-violet-300 hover:underline decoration-sky-500 decoration-4 underline-offset-4'
								href='/clasesEspeciales'
							>
								Clases Especiales
							</Link>
							<Link
								className='rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-violet-300 hover:underline decoration-sky-500 decoration-4 underline-offset-4'
								href='/examenes'
							>
								Examenes
							</Link>
						</nav>
					</div>
					<div className='sm:hidden'>
						<Hamburger
							toggled={hamburgerOpen}
							toggle={setHamburgerOpen}
							size={28}
							direction='right'
							easing='ease-in-out'
							color='#fff'
						/>
					</div>
				</div>
			</header>
			{hamburgerOpen && (
				<div className='hambuger-menu flex flex-col absolute left-0 text-lg text-white items-center z-[9999] bg-blue-950 backdrop-blur-[1px] w-screen sm:hidden'>
					<Link
						href='/'
						className='w-full !rounded-none !text-base !p-5 hover:underline decoration-sky-500 decoration-4 underline-offset-4'
						onClick={onNavLinkClick}
					>
						Tutorias
					</Link>
					<Link
						href='/clasesEspeciales'
						className='w-full !rounded-none !text-base !p-5 hover:underline decoration-sky-500 decoration-4 underline-offset-4'
						onClick={onNavLinkClick}
					>
						Clases Especiales
					</Link>
					<Link
						href='/examenes'
						className='w-full !rounded-none !text-base !p-5 hover:underline decoration-sky-500 decoration-4 underline-offset-4'
						onClick={onNavLinkClick}
					>
						Examenes
					</Link>
				</div>
			)}
		</>
	);
}
