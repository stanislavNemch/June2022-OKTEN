import {useEffect, useState} from "react";
import {getMissions} from "../../services/api.spacexdata.service";
import Mission from "../Spacex/Mission";

export default function Missions() {
    let [missions, setMissions] = useState([]);// [get,set()]

    useEffect(() => {  //useEffect это хук выполняется один раз, чем отдельно fetch
        getMissions().then(value => setMissions(value));
    },[])

    return (
        <div>

            <h2>SpaceX API component header</h2>
            {  //Обычный перебор массива через map JavaScript!!

                missions.filter(mission => mission.launch_year !== "2020").map((mission, index) => <Mission key={index} mission={mission}/>)
            }

        </div>
    );
}