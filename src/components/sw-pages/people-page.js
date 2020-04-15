import React from "react";

const PeopleDetailsView = ({person}) => {
    const {id, name, gender, birthYear, eyeColor, height, mass} = person;
    return (
        <React.Fragment>
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                 alt={name}
            />

            <div className="card-body" style={{paddingTop: '0'}}>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender:</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year:</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Heigh:</span>
                        <span>{height}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Mass:</span>
                        <span>{mass}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color:</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};

export default PeopleDetailsView;