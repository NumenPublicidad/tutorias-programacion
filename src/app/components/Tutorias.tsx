import React from 'react';
import { FaJsSquare, FaHtml5, FaReact, FaNode } from 'react-icons/fa';

const getIconComponent = (icon) => {
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

export const Tutorias = ({ tutoria }) => {
  return (
    <div className='p-8 flex flex-col md:flex-row items-stretch h-96'>
      {/* Left column */}
      <div className='w-full md:w-1/2 bg-white p-4 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold mb-2'>{tutoria.name}</h2>
        <h3 className='text-lg mb-2'>{tutoria.time1}</h3>
        <h3 className='text-lg mb-2'>{tutoria.time2}</h3>
      </div>
      {/* Right column */}
      <div
        className={`w-full md:w-1/2 bg-${tutoria.bgColor} p-4 flex items-center justify-center border text-white`}
      >
        <div>
          <div className='text-8xl flex items-center justify-center'>{getIconComponent(tutoria.icon)}</div>
          <h3 className='text-lg w-full mb-4 flex justify-center'>{tutoria.teacher}</h3>
          <a href={tutoria.zoom} className='hover:underline'>
            <button className='bg-blue-500 px-2 py-4 rounded-xl'>Enlace de la reunión</button>
          </a>
        </div>
      </div>
    </div>
  );
};
