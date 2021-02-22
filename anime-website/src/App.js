import {useState, useEffect} from "react"
import Header from "./components/Header.js"
import Sidebar from "./components/Sidebar.js"
import MainContent from "./components/MainContent.js"

function App() {

  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity")
                  .then(response => response.json());

                  setTopAnime(temp.top.slice(0,5))
  }

  const HandleSearch = e => {
    e.preventDefault()

    FetchAnime(search);
  }

  // async function FetchAnime(query){
  //   const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
  //     .then(response => response.json())

  //     setAnimeList(temp.results)
  // }

  const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		setAnimeList(temp.results);
	}

  useEffect( () => {
    getTopAnime();
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar 
          topAnime={topAnime}
        />
        <MainContent 
          HandleSearch = {HandleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
