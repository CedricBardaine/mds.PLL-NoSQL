export default (context, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('api', api);
    // For Nuxt <= 2.12, also add 👇
    context.$api = api;
}

const api = {
    getDate() {
        return fetch('/api/date');
    },
    /**
     * 
     * @param {string} route like /path/couldbeanumber 
     * @returns 
     */
    getRoute(route) {
        return fetch('/api' + route);
    },

    postRoute(route, data) {
        console.log("before post fetch");

        return fetch('/api' + route, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            data: JSON.stringify(data)
        })
    }
}