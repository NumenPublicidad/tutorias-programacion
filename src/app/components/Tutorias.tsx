// Tutorias.js

import React from 'react';

export const Tutorias = ({ tutoria }) => {
  return (
    <div className='p-8 flex flex-col md:flex-row items-stretch h-96'>
      {/* Left column */}
      <div className='w-full md:w-1/2 bg-black p-4 flex flex-col justify-center'>
        <h2 className='text-2xl font-bold mb-2'>{tutoria.name}</h2>
        <h3 className='text-lg mb-2'>{tutoria.time1}</h3>
        <h3 className='text-lg mb-2'>{tutoria.time2}</h3>
      </div>
      {/* Right column */}
      <div className={`w-full md:w-1/2 bg-${tutoria.bgColor} p-4 flex items-center justify-center`}>
        <div>
          <h3 className='text-lg w-full mb-4'>{tutoria.teacher}</h3>
          <a href={tutoria.zoom} className='text-black hover:underline'>
            Enlace de la reunión
          </a>
        </div>
      </div>
    </div>
  );
};
