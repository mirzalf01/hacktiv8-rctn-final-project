import { useEffect, useReducer } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';

function App() {
  const initialState = {
    movies: [],
    loading: true,
    teks: '. . . loading'
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case ('SEARCH_SUCCESS'):
        return { ...state, movies: action.payload, loading: false };
      case ('SEARCH_ERROR'):
        return { ...state, teks: action.payload, loading:true };
      case ('LOADING'):
        return { ...state, loading: action.payload, teks: '. . . loading' };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = async (search = 'iron') => {
    dispatch({ type: 'LOADING', payload: true });

    axios.get(`http://www.omdbapi.com/?apikey=adeeed45&s=${search}`).then(res => {
      if (res.data.Search) {
        dispatch({ type: 'SEARCH_SUCCESS', payload: res.data.Search })
      } else{
        dispatch({ type: 'SEARCH_ERROR', payload: res.data.Error })
      }
    })
  };
  
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header 
          title="FinProH8"
          fetchFunc={fetchMovies}
        />
      
      <main>
        <h2>Show your favorite movies</h2>
        <div className="container">
          {
            state.loading ? 
            <>
              <span>{state.teks}</span>
            </>
            :
            state.movies.map((item) => 
              <>
                <Movie 
                  title={item.Title}
                  url={item.Poster}
                />
              </>
            )

          }
        </div>
      </main>

    </div>
  );
}

export default App;
