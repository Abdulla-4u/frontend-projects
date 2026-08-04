import React, { useEffect, useState } from 'react'
import Api from '../Api/Api'

const Sidebar = ({genreId, selectedGenreName}) => {

   const [activeIndex, setActiveIndex] = useState(0)
   const [genreList, setGenreList] = useState([]);

 

   useEffect(() =>{
    GetGenreData()
   },[])


    const GetGenreData = ()=>{
        Api.GetGameCategory().then(data => setGenreList(data))
    }

  return (
    <>
   <div className="min-h-[554px]  px-3 py-4 overflow-y-auto bg-slate-300 dark:bg-[#0F172A]">
      <ul className="space-y-2 font-medium">
       {
        genreList.length > 0 
        ? 
        genreList.map((item, i)=>(
            <li onClick={()=> {setActiveIndex(i); genreId(item.id); selectedGenreName(item.name)}} key={i} className='cursor-pointer'>
             <a className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ${activeIndex === i && 'bg-gray-700'} dark:hover:bg-gray-700 group`} onClick={()=>setActiveIndex(i)}>
                   <img src={item.image_background} alt="" className='h-12 w-12 rounded-lg object-cover'/>
                   <h2 className="ms-3">{item.name}</h2>
             </a>
         </li>
        ))
        : <h1 className='text-white text-3xl'>loading..</h1>
       }
      </ul>
   </div>



    </>
  )
}

export default Sidebar


// <aside id="default-sidebar" className="relative bg-red-800 w-60 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">

{/* <div className="flex">
          <div className={`${open ? 'w-72': 'w-16'} bg-[#0e0e0e] h-screen transition-all duration-500`}>
              <div className="flex py-3 px-4 justify-end">
                  <div onClick={()=> setOpen(!open)} className="bg-zinc-300 rounded-full cursor-pointer p-1">
                     <img src={Menu} alt="menu_icon" className="w-5"/>
                  </div>
              </div>
              <div className="mt-4 flex flex-col gap-4 relative">
                  {menus.map((v, i)=> (
                    <Link onClick={()=> setActiveSide(i)} to={v.to} key={i} className={`${!open && 'pl-6'} flex items-center gap-4 text-sm p-2 cursor-pointer text-gray-300 rounded-md group hover:bg-gray-700 ${activeSide === i && 'bg-gray-700'} ${v.margin && 'mt-5'} transition-all duration-500`}>
                       <button className='text-white text-xl transition-all duration-500'>+</button>
                        <h2 style={{transitionDelay: `${i + 3}00ms`}}
                       className={`font-medium whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{v.name}</h2>
                       <h2 className={`${open && 'hidden'} absolute left-48 group-hover:left-20 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:duration-300 group-hover:w-fit drop-shadow-lg whitespace-pre bg-white text-gray-800 font-semibold rounded-md px-0 py-0`}>{v.name}</h2>
                   </Link>
                  ))}
              </div>
          </div>
          </div> */}


          
         //  const [open, setOpen] = useState(true)
         //  const [activeSide, setActiveSide] = useState(0)
         //  const menus = [
         //    {name: 'Dashboard', to:'/'},
         //    {name: 'Favorite', to:'/'},
         //    {name: 'Wish', to:'/'},
         //    {name: 'Cart', to:'/', margin: true},
         //    {name: 'Videos', to:'/'},
         //    {name: 'Download', to:'/'},
         //    {name: 'Recent', to:'/', margin: true},
         //    {name: 'Logout', to:'/'},
         //  ]
