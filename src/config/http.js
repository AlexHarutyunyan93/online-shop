export default function request(config, language, category) {
    const baseUrl = "http://localhost:4000/api/items/";
    const getUrl = `${baseUrl}?language=${language}category=${category}`;
    fetch(url)
        .then(req => {
            return req.json()
        })
        .then(res => {
            config(res);
        });
}

