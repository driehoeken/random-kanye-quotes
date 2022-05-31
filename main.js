const quote = document.querySelector('#quote');

const getQuote = async function(){
    try{
        const response = await fetch('https://api.kanye.rest');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        return json.quote;
    }
    catch(error){
        console.log(error);
    }
};

const setQuote = function(){
    getQuote().then((result) => quote.innerHTML = result);
}