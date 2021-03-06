export default class CoffeeService {

  _apiBase = 'http://localhost:3000';
  id = 1;

  async getResource(url) {

    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();

  }

  async getBestsellers() {
    const res = await this.getResource(`/bestsellers/`);
    for (let key in res) {
      res[key]['id'] = this.getId();
    }
    return res.map(this._transformBestsellers);
    
  }
  async getCoffee() {
    const res = await this.getResource(`/coffee/`);
    for (let key in res) {
      res[key]['id'] = this.getId();
    }
    return res.map(this._transformCoffee);
    
  }
  async getgGoods() {

    return await this.getResource(`/goods/`);
    
  }
  getCoffeeItem = async (name) => {
    let res = await this.getResource(`/coffee/`);
    res = res[res.findIndex(item => item.name === name)]
    res['id'] = this.getId();
    return this._transformCoffee(res);
  }

  getId() {
    return this.id++ + '';
  }

  _transformBestsellers = (item) => {
    return {
      id: item.id,
      name: item.name,
      url: item.url,
      price: item.price
    }
  }

  _transformCoffee = (item) => {
    return {
      id: item.id,
      name: item.name,
      country: item.country,
      url: item.url,
      price: item.price,
      description: item.description
    }
  }

  postContacts = async (elem) => {
    return await fetch(this._apiBase + "/contacts", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(elem)
    })
    .catch(error => console.log('aaa', error));
  }
}

