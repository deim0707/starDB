import React from "react";

const StarshipDetailsView = ({starship}) => {
    const {id, name, model, manufacturer, length, crew, passengers, cargoCapacity} = starship;
    return (
        <React.Fragment>
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                 alt={name}
            />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Model:</span>
                        <span>{model}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Manufacturer:</span>
                        <span>{manufacturer}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Length:</span>
                        <span>{length}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Crew:</span>
                        <span>{crew}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Passengers:</span>
                        <span>{passengers}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Cargo Capacity:</span>
                        <span>{cargoCapacity}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};

export default StarshipDetailsView;