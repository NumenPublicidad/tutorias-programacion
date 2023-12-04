'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Turn as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function Navbar(): any {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const onNavLinkClick = (): any => {
		setTimeout(() => {
			setHamburgerOpen(!hamburgerOpen);
		}, 150);
	};

	const motionNav = {
		initial: {
			scaleY: 0,
			opacity: 0,
		},
		animate: {
			scaleY: 1,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 1],
			},
		},
	};

	return (
		<>
			<header className='max-w-screen bg-blue-950  border-b border-white/50  backdrop-blur-[1px]'>
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
			<AnimatePresence>
				{hamburgerOpen && (
					<motion.div
						variants={motionNav}
						initial='initial'
						animate='animate'
						exit='exit'
						className='hambuger-menu origin-top gap-y-12 scroll-pt-52 h-full text-center flex flex-col absolute text-white items-center justify-center z-[9999] bg-blue-950 backdrop-blur-[1px] w-screen sm:hidden'
					>
						<Link
							href='/'
							className='w-full !rounded-none underline text-xl !p-5 decoration-sky-500 decoration-4 underline-offset-8'
							onClick={onNavLinkClick}
						>
							Tutorias
						</Link>
						<Link
							href='/clasesEspeciales'
							className='w-full !rounded-none underline text-xl !p-5 decoration-sky-500 decoration-4 underline-offset-8'
							onClick={onNavLinkClick}
						>
							Clases Especiales
						</Link>
						<Link
							href='/examenes'
							className='w-full !rounded-none underline text-xl !p-5 decoration-sky-500 decoration-4 underline-offset-8'
							onClick={onNavLinkClick}
						>
							Examenes
						</Link>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
