import Card from "../components/Card"
import { useQuery } from '@apollo/client';
import { GET_SPACEX_SHIPS } from "../query"; 
import { useState, useEffect } from "react";
import Header from "../components/Header";

const getImage = (img) => {
    return require('../assets/' + img);
}

const Home = () => {
    const { loading, error, data } = useQuery(GET_SPACEX_SHIPS);
    const [ships, setShips] = useState([]);

    useEffect(() => {
        data && setShips(data.ships);
    }, [ships, data, loading])
    
  return (
    <div className="mt-5 p-4">
        <Header btnLabel={"Rockets"} label="SpaceX Ships" />
        {loading && <h1>Loding...</h1> }

        {!loading && <div className="grid grid-cols-4 max-sm:grid-cols-1 bg-white p-2 gap-4">
            {ships.map((ship, index) => {
                return <Card 
                key={index}
                imgUrl={ship.image && ship.image.startsWith('https://i.imgur.com') && getImage(ship.image.substring(20, ship.image.length))} 
                name={ship.name}
                yearBuilt={ship.year_built}
                alt={'image'}
            /> 
            })}
        </div>}
     </div>
  )
}

export default Home