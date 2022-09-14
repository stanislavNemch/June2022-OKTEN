import {simpsons} from "./Data";
import Simpson from "./Simpson";
import './Simpsons.css'

function Simpsons() {
    return (
        <div className={'block_all'}>
            {
                simpsons.map((simpson, index) => <Simpson key={index} simpson={simpson}/>)
            }

        </div>
    );
}

export default Simpsons;