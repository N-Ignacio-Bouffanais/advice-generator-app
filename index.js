const axios = require('axios');

const GetData = async () => {
    try {
        const resp = await axios.get('https://api.adviceslip.com/advice');
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};
GetData();