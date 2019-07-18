//from Former Nutshell project Data Managers.

const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}`)
                .then(result => result.json())
        }
    },

    getAll: {
        value: (resource) => {
            return fetch(`${remoteURL}/${resource}`)
                .then(result => result.json())
        }
    },

    getAllExpand: {
        value: (resource) => {
            return fetch(`${remoteURL}/${resource}?_expand=usa`)
                .then(result => result.json())
        }
    },

    getASpecificCollection: {
        value: (id) => {
            return fetch(`${remoteURL}/quarters?collectionId=${id}&_expand=usa`)
                .then(result => result.json())
        }
    },

    getASpecificQ: {
        value: (id) => {
            return fetch(`${remoteURL}/quarters?id=${id}`)
                .then(result => result.json())
        }
    },

    getASpecificQ_expand: {
        value: (id) => {
            return fetch(`${remoteURL}/quarters/${id}?_expand=usa`)
                .then(result => result.json())
        }
    },



    delete: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
            }).then(result => result.json())
        }
    },
    add: {
        value: (resource, item) => {
            return fetch(`${remoteURL}/${resource}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
                .then(result => result.json())
        }
    },
    edit: {
        value: (resource, id, item) => {
            // console.log(item, "item")
            // console.log(`${remoteURL}/${resource}/${id}`)
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
                .then(result => result.json())
        }
    }
})