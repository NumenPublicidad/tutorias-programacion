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
    <div className='p-8 flex flex-row  h-auto drop-shadow-2xl'>
      {/* Left column */}
      <div className='w-1/2 bg-white px-6 py-10 flex flex-col drop-shadow-2xl justify-center text-center items-center rounded-bl-2xl '>
        <h2 className='text-2xl font-bold mb-2'>{tutoria.name}</h2>
        <h3 className='text-lg mb-2 my-5 font-semibold'>{tutoria.time1}</h3>
        <h3 className='text-lg mb-2 font-semibold'>{tutoria.time2}</h3>
      </div>
      {/* Right column */}
      <div
        className={`w-1/2 bg-${tutoria.bgColor} flex items-center justify-center px-6 py-10 rounded-tr-2xl border text-white text-center`}
      >
        <div className=''>
          <div className='text-8xl flex items-center justify-center'>{getIconComponent(tutoria.icon)}</div>
          <h3 className='text-lg w-full mb-4 flex justify-center my-3'>{tutoria.teacher}</h3>
          <a href={tutoria.zoom} target={'_blank'} className='hover:underline'>
            <button className='bg-blue-500 md:px-3 md:py-2npm px-3 py-1 lg:px-3 rounded-xl hover:bg-white hover:text-blue-600 hover:font-bold'>Enlace de la reunión</button>
          </a>
        </div>
      </div>
    </div>
  );
};
