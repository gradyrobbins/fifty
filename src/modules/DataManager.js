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
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}?_expand=usa`)
            .then(result => result.json())
        }
    },


    // http://localhost:3000/collection/1?_expand=usa


    //commented out; not in use 2/8/19
    // getAllUserData: {
    //     value: (resource, id) => {
    //         return fetch(`${remoteURL}/${resource}?user_id=${id}`)
    //         .then(result => result.json())
    //     }
    // },

    getASpecificCollection: {
        value: (id) => {
            return fetch(`${remoteURL}/quarters?collectionId=${id}`)
            .then(result => result.json())
        }
    },

    getASpecificQ: {
        value: (id) => {
            return fetch(`${remoteURL}/quarters?id=${id}`)
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
        value: (id, item) => {
            // console.log(item, "item")
            // console.log(`${remoteURL}/${resource}/${id}`)
            return fetch(`${remoteURL}/collection/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
            .then(result => result.json())
        }
    }
})