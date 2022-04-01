import React from 'react'
import Layout from '../../components/layouts'
import { useDispatch, useSelector } from "react-redux";
import { actionGetMovie } from '../../store/actions/movie';
import  {TabelMovies} from '../../components/atoms'

const MoviesViews = () => {
  const dispatch = useDispatch();
  const [page,setpage] = React.useState(1)
  const [listMovies,setListMovies] = React.useState([])
  const { Movies, MovieLoading } = useSelector((state) => state.moviesReducer);
  const handleClick = () => {
    setpage(page + 1)
    dispatch(actionGetMovie(page));
  }

  const handleMin = React.useCallback(() => {
    if(page === 1) {
      setpage(1)
      return
    }
    setpage(page - 1)
  },[page]);

    React.useEffect(() => {
      dispatch(actionGetMovie(page));
    }, [dispatch, page]);

    React.useEffect(() =>{
      if(Movies.length > 0) {
        setListMovies(Movies)
      }
    },[Movies])
  console.log(Movies);
  return (
  <Layout>
    <div className='px-2'>
    <p className='text-red-500 font-bold text-[20px]'>List Movies</p>
    {MovieLoading ? 
    ''
    :
    <TabelMovies data={listMovies} handleClick={handleClick} handleMin={handleMin} page={page}/>  
  }
    </div>  
  </Layout>
  )
}

export default MoviesViews