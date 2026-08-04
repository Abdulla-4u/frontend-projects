import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import TrendingGames from './TrendingGames'
import PopularGames from './PopularGames'
import Sidebar from "./Sidebar";
import Api from '../Api/Api';

const Home = () => {
    
    const [allGameList, setAllGameList] = useState([])
    const [gameListByGenres, setGameListByGenres] = useState([]);
    const [selectedGenreName, setSelectedGenreName] = useState('Action');

    useEffect(() =>{
      getAllGamesData()
      getGameListByGenreId(4)
    },[])

    const getAllGamesData = () => {
      Api.getAllGames().then(data => setAllGameList(data))
    }
  
    const getGameListByGenreId = (id)=>{
      Api.GetGameListByGenreId(id).then(res => setGameListByGenres(res))
    }
    console.log(gameListByGenres)
  return (

      <>  
        <div className="grid grid-cols-6 bg-gray-100 dark:bg-[#0F172A]">
          <div className="lg:block hidden">
               <Sidebar genreId={(genreId) => getGameListByGenreId(genreId)}
                selectedGenreName={(name)=> setSelectedGenreName(name)}/>  
          </div>
          <div className="lg:col-span-5 col-span-6 dark:bg-[#0F172A]">
              {/* {allGameList.length > 0 && gameListByGenres.length > 0 ? */}
                  <>
                    <Banner gameBanner={allGameList[0]}/>
                    <TrendingGames trendingGames={allGameList}/>
                    <PopularGames selectedGenreName={selectedGenreName} gameList={gameListByGenres}/>
                  </>
                
          </div>
        </div>
      </>





 // genereId={(genereId)=> getGamebyGenreId(genereId)} 






    // <div className='px-4 py-3 transition-all duration-700'>
      
    //     <PopularGames GameById={GameById}/>
    // </div>
  )
}

export default Home


























  {/* <Banner gameList={gameList}/> */}
        {/* <TrendingGames gameList={gameList}/> */}