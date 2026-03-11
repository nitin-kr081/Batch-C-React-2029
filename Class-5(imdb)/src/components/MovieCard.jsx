import React from 'react'

function MovieCard({movieTitle , posterUrl}) {
  return (
    <div className='w-60 h-90 bg-cover' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${posterUrl})`}}>
      <p className='text-white'>{movieTitle}</p>
    </div>
  )
}

export default MovieCard