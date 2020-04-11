import React from "react";

const StarshipDetailsView = ({starship}) => {
    const {id, name, model, manufacturer, costInCredits, length, crew, passengers, cargoCapacity} = starship;
    return (
        <React.Fragment>
            <img className="person-image"
                src={`/assets/img/starships/${id}.jpg`}
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
                        <span className="term">Cost InC redits:</span>
                        <span>{costInCredits}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">length:</span>
                        <span>{length}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">crew:</span>
                        <span>{crew}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">passengers:</span>
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