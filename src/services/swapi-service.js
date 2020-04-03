export  default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    //делает запрос по адресу(аргумент), преобразует ответ в json
    GetResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Не получается получить доступ к ${url} Статус: ${res.status}` )
        }

        const body = await res.json();
        return body
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }
    ////////////people
    //преобразует объект в форму объекта для стейта
    _transformPerson = (person) =>  {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor,
        }
    };
    //получает список всех людей. преобразует в вид для стейта каждого в полученном массиве
    getAllPeople = async () => {
        const res= await this.GetResource(`/people/`);
        return res.results.map(this._transformPerson);
    }
    //получает определённого персонажа, переводит его в вид объекта для стейта
    getPerson = async (id) => {
        const people= await this.GetResource(`/people/${id}`);
        return  this._transformPerson(people);
    }
////////////planet
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    getAllPlanets = async () => {
        const res= await this.GetResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }
    getPlanet= async (id) => {
        const planet = await this.GetResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    ////////////starship
    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }
    getAllStarships = async () => {
        const res= await this.GetResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }
    getStarship= async (id) => {
        const starship = await this.GetResource(`/starships/${id}`);
        return this._transformStarship(starship)
    }


}