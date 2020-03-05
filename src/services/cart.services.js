export const cartServices = {
    addToCart,
    removeFromCart,
    getCartItems
};


function getCartItems(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const storageItems = JSON.parse(localStorage.getItem('cartItems'));
    if(storageItems && storageItems.length){
        const query = JSON.stringify(storageItems);

        return fetch(`http://localhost:4000/api/cartitems?q=${query}`, requestOptions)
            .then(handleResponse)
            .then(data => {
                return data;
            });
    }
}

function addToCart(id){
    let storageItems = JSON.parse(localStorage.getItem('cartItems'));
    if(!storageItems.includes(id)){
        storageItems.push(id);
        localStorage.setItem('cartItems', storageItems);
        return storageItems;
    } else {
        return "Product already added."
    }

}

function removeFromCart(id){
    let storageItems = JSON.parse(localStorage.getItem('cartItems'));
    storageItems = storageItems.filter(e => e !== id);
    localStorage.setItem('cartItems', storageItems);

    return storageItems;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            // if (response.status === 401) {
            //
            // }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
