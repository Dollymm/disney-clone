import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import Largeovieard from './Largeovieard'
const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenrelId(props.genereId).then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const slideRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += 500;
    }
  };

  const slideLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= 500;
    }
  };

  return (
    <div className='relative'>
      <IoChevronBackOutline
        onClick={slideLeft}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
          movieList.length > 0 ? 'mt-[80px]' :'mt-[150px]'
        }`}
      />

      <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide  scroll-smooth pt-5 px-3 pb-5'>
        {movieList.map((item, index) => (
         <>
        {props.index_%3==0?<Largeovieard movie={item}/> :<MovieCard key={index} movie={item} />}
         </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={slideRight}
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${
          movieList.length > 0 ? 'mt-[80px]' : 'mt-[150px]'
        }`}
      />
    </div>
  );
};

export default MovieList;
