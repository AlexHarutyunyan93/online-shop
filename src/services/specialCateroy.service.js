export const specialCategoryServices = {
    getSpecialCategory
};

function getSpecialCategory(categoryName){
    const requestOptions = {
        method: 'GET',
        headers: {'Content-tpe': 'application/json'}
    };

    return fetch(`http://localhost:4000/specialcategory?name=${categoryName}`, requestOptions)
        .then(handleResponse)
        .then(data => data)
        .catch(err => err)
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