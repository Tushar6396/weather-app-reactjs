import React, {useEffect, useState} from 'react';
import { WiDayCloudyWindy } from "react-icons/wi";
import './css/Temp.css';

const Temp =() => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai")

    useEffect(() => {
        const fetchApi = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=433c79408b38dacecb944704a2f497b9`
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        
        fetchApi();
    },[search]);

    return (
        <>
            <div className="container">
                <div className="inputData">
                    <input type="search" 
                    className='inputField'
                    onChange={(event) => { setSearch(event.target.value) } }
                    value={search}
                    />
                </div>

                {
                    !city ? (
                        <p className='ErrorMsg'>No Data Found</p>
                    ) : (
                        <div>
                        <div className="info">
                            <h2 className="location">{search}</h2>
                            <WiDayCloudyWindy className='icon'/>
                            <h1 className="temp">{city.temp} &deg; Cel </h1>
                            <h3 className="minmax"> Min: {city.temp_min} &deg; Cel || Max: {city.temp_max} &deg; Cel</h3>
                        </div>
                        <div className="wave-one"></div>
                        
                        </div>
                    )
                }
                

            </div>
        </>
    )
}

export default Temp;