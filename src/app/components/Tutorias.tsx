import React from 'react';
import {
	FaJsSquare,
	FaHtml5,
	FaReact,
	FaNode,
} from 'react-icons/fa';

interface TutoriaProps {
	name: string;
	time1: string;
	time2: string;
	icon: string;
	teacher: string;
	zoom: string;
}

// Utiliza el tipo de la interfaz para la prop
export const Tutorias: React.FC<{
	tutoria: TutoriaProps;
}> = ({ tutoria }) => {
	const getIconComponent = (
		icon: TutoriaProps['icon'],
	): JSX.Element | null => {
		switch (icon) {
			case 'FaJsSquare':
				return <FaJsSquare />;
			case 'FaHtml5':
				return <FaHtml5 />;
			case 'FaReact':
				return <FaReact />;
			case 'FaNode':
				return <FaNode />;
			default:
				return null;
		}
	};

	return (
		<div className='p-8 flex flex-row h-auto drop-shadow-2xl'>
			{/* Left column */}
			<div className='w-1/2 bg-white px-6 py-10 flex flex-col drop-shadow-2xl justify-center text-center items-center rounded-bl-2xl '>
				<h2 className='text-2xl font-bold mb-2'>
					{tutoria.name}
				</h2>
				<h3 className='text-lg mb-2 my-5 font-semibold'>
					{tutoria.time1}
				</h3>
				<h3 className='text-lg mb-2 font-semibold'>
					{tutoria.time2}
				</h3>
			</div>
			{/* Right column */}
			<div
				className={`w-1/2 flex items-center justify-center px-6 py-10 rounded-tr-2xl border text-white text-center`}
			>
				<div className=''>
					<div className='text-8xl flex items-center justify-center'>
						{getIconComponent(tutoria.icon)}
					</div>
					<h3 className='text-lg w-full mb-4 flex justify-center my-3'>
						{tutoria.teacher}
					</h3>
					<a
						href={tutoria.zoom}
						target={'_blank'}
						className='hover:underline'
					>
						<button className='bg-blue-500 px-3 py-2 lg:py-3 rounded-xl hover:bg-white hover:text-blue-600'>
							Enlace de la reunión
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};
