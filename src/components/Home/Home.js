import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';

const Home = () => {

  const [teams,setTeams]=useState([]);
  useEffect(()=>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
    fetch(url).then(res=>res.json()).then(data=>setTeams(data.teams))
  },[])
  return (
    <div>
      <Header></Header>

      <div className="row m-2 ">
        {
          teams.map(team=><Team team={team}></Team>)
        }
      </div>
    </div>
  );
};

export default Home;