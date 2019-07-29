export default function request(url, configuration) {
    fetch(url)
        .then(req => {
            return req.json()
        })
        .then(res => {
            configuration(res);
        });
}

