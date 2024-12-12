import React from 'react'
import Image from 'next/image'
import img from '../../public/carImage.webp'

function ResultCard({modelName}) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
    <Image
      className="w-full h-48 object-cover"
      src={img}
      alt={modelName}
    />
    <div className="px-6 py-4">
      <h2 className="font-bold text-xl mb-2 text-gray-800">{modelName}</h2>
      
    </div>
    
  </div>
  )
}

export default ResultCard