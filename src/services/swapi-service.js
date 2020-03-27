export  default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async GetResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Не получается получить доступ к ${url} Статус: ${res.status}` )
        }

        const body = await res.json();
        return body
    }

    async getAllPeople () {
        const res= await this.GetResource(`/people/`);
        return res.results;
    }
    getPerson (id) {
        // const res= await this.GetResource(`/people/${id}`)
        return this.GetResource(`/people/${id}`)
    }

    async getAllPlanets () {
        const res= await this.GetResource(`/planets/`);
        return res.results;
    }
    getPlanet (id) {
        return this.GetResource(`/planets/${id}`)
    }

    async getAllStarships () {
        const res= await this.GetResource(`/starships/`);
        return res.results;
    }
    getStarship (id) {
        return this.GetResource(`/starships/${id}`)
    }


}