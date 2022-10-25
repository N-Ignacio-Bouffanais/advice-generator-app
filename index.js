
const sendGetRequest = async () => {
    try {
        const resp = await axios.get('https://api.adviceslip.com/advice');
        console.log(resp.data);
        console.log(resp.data.slip.id)
        document.getElementById("id").innerHTML = resp.data.slip.id;
        document.getElementById("quote").innerHTML = resp.data.slip.advice;
    } catch (err) {
        console.error(err);
    }
};

sendGetRequest();
