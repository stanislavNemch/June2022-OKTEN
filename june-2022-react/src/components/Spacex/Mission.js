export default function Mission(props) {
    let {mission} = props;

    return (
        <div>

            <h2>{mission.mission_name} -- {mission.launch_year}</h2>
            <img src={mission.links.mission_patch_small}/>

        </div>
    );
}