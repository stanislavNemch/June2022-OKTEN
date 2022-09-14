function Simpson(props) {
    const {simpson} = props;
    return (
        <div>
                <h3>{simpson.name} -- {simpson.age}</h3>
                <img src={simpson.photo} alt={simpson.name}/>
                <p>{simpson.surname} -- {simpson.info}</p>
        </div>
    );
}

export default Simpson;