const axios = require('axios');

const getBook = async () => {
    try{
        const response = await axios.get('http://localhost:3000/api/books')
        return response.data
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {getBook}