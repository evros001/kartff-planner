import React, {useState} from 'react';
import styles from './styles.module.css';
import axios from 'axios';
import Logout from '../Logout/Logout';
import PlayerCard from '../PlayerCard/PlayerCard';



const Roster = () => {
  // // nfl player state vars
  const [playerNameText, setPlayerNameText] = useState('');
  const [error, setError] = useState('');
  const [searchPlayerResults, setSearchPlayerResults] = useState([]);

  // Search nfl player
  // add new todo item to database
  const findPlayer = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.get(`http://localhost:5500/api/player/${playerNameText}`)
      console.log('player data res', res.data);
      setSearchPlayerResults(res.data);
    }catch(err){
      console.log(err);
      setError("Cant Find Player");
    }
  }

  const findAllPlayers = async (e) => {
    try{
      const res = await axios.get(`http://localhost:5500/api/players/`)
      console.log('all players', res);
    }catch(err){
      console.log(err);
      setError(`Oops Something Went Wrong ${err}`);
    }
  }

  return (
    <div className={styles.main_container}>
      <h1>ROSTER</h1>
      <h2>NFL PLAYER SEARCH</h2>
      <form className="form" onSubmit={e => findPlayer(e)}>
        <input type="text" 
          placeholder='SEARCH NFL PLAYER' 
          onChange={e => {setPlayerNameText(e.target.value)} } 
          value={playerNameText} />
        <button type="submit">Search Player</button>
        {error && <div>{error}</div>}
        <Logout />
      </form>
      <div className={styles.search_results_container}>
        <PlayerCard playerData={searchPlayerResults}/>
      </div>
    </div>
  )
}

export default Roster;