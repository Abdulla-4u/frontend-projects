
 // For All Game Category

 let APi_Key = "95050b3406ed49b19a130e2f497bbc8b";
 let GetGameCategory = async () => {
   let data = await fetch(`https://api.rawg.io/api/genres?key=${APi_Key}`);
   let res = await data.json();
   return res.results;
 };

  // For All Games

  let getAllGames = async () => {
    let data = await fetch(`https://api.rawg.io/api/games?key=${APi_Key}`)
    let res = await data.json()
    return res.results
  }

  // For Games by Genre Id

  let GetGameListByGenreId = async (id) => {
    let data = await fetch(`https://api.rawg.io/api/games?key=${APi_Key}&genres=${id}`);
    let res = await data.json();
        return res.results;
  };


export default { GetGameCategory, getAllGames, GetGameListByGenreId };



  
