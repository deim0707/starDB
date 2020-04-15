import React from "react";

const PlanetDetailsView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter, climate, gravity} = planet;
    return (
        <React.Fragment>
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt={name}
            />

            <div className="card-body" style={{paddingTop: '0'}}>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Climate:</span>
                        <span>{climate}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Gravity:</span>
                        <span>{gravity}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};

export default PlanetDetailsView;