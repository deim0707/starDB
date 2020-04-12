export default class SwapiService {
  _apiBase = 'http://localhost:5000';


  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

<<<<<<< HEAD
        if (!res.ok) {
            throw new Error(`Не получается получить доступ к ${url} Статус: ${res.status}` )
        }

        const body = await res.json();
        return body
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };
    ////////////people
    //преобразует объект в форму объекта для стейта
    _transformPerson = (person) =>  {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    };
    //получает список всех людей. преобразует в вид для стейта каждого в полученном массиве
    getAllPeople = async () => {
        const res= await this.GetResource(`/people/`);
        return res.results.map(this._transformPerson);
    };
    //получает определённого персонажа, переводит его в вид объекта для стейта
    getPerson = async (id) => {
        const people= await this.GetResource(`/people/${id}`);
        return  this._transformPerson(people);
    };
////////////planet
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };
    getAllPlanets = async () => {
        const res= await this.GetResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };
    getPlanet= async (id) => {
        const planet = await this.GetResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    };
=======
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.map(this._transformPerson).slice(0, 10);
  };
>>>>>>> newBranch

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.map(this._transformPlanet).slice(1, 11);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.map(this._transformStarship).slice(6, 16);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  _transformPlanet = (planet) => {
    return {
      id: planet.id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      climate: planet.climate,
      gravity: planet.gravity
    };
  };

  _transformStarship = (starship) => {
    return {
      id: starship.id,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  };

  _transformPerson = (person) => {
    return {
      id: person.id,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      height: person.height,
      mass: person.mass

    }
  };
}
