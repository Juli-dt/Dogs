const axios = require("axios")
const { Dog, Temperament } = require("../db")
const url = "https://api.thedogapi.com/v1/breeds"
const getDogs = async () => {
    const dogs = [];
    const info = await axios.get(url);
    const names = info.data.map((dog) => dogs.push(dog.name))
    console.log(dogs);
    return dogs

}

const getByName = async (id) =>{
    const api = await axios.get(`${url}/search?q=${id}`)
    const info = api.data[0]
    
    const dog = {
        image: info.reference_image_id,
        name: info.name,
        height: info.height,
        weight: info.weight,
        life_span: info.life_span,
        temperaments: info.temperament
    }
    return dog;
}
module.exports = {
    getDogs,
    getByName
}