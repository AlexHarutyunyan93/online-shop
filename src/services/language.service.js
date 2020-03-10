export const languageServices = {
    getLanguages,
    setLanguage
};

function setLanguage(id){
    localStorage.setItem('currentLanguageId', id);
}

function getLanguages(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`http://localhost:4000/language`, requestOptions)
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
