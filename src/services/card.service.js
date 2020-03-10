export const cardService = {
    getCardById,
    getCardsByCategoryId,
    getSliderCards
};

function getCardById(id){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`http://localhost:4000/api/cards/${id}`, requestOptions)
        .then(handleResponse)
        .then(data => data)
        .catch(err => err)
}

function getCardsByCategoryId(id){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`http://localhost:4000/api/cards?categoryId=${id}`, requestOptions)
        .then(handleResponse)
        .then(data => data)
        .catch(err => err)
}

function getSliderCards(){

}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}