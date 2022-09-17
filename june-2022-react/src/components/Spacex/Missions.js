import {useEffect, useState} from "react";
import {getMissions} from "../../services/spacexdata.api.service";
import Mission from "../Spacex/Mission";
// import {getMissionsAxios} from "../../services/spacexdata.api.axinos.service";

export default function Missions() {
    let [missions, setMissions] = useState([]);// [get,set()]

    useEffect(() => {  //useEffect это хук выполняется один раз, чем отдельно fetch
        getMissions().then(value => setMissions(value));
        // getMissionsAxios().then(value => setMissions(value.data));
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