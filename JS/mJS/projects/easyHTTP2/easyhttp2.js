/**
 *
 * EasyHTTP2 Library
 * Library for making HTTP Requests
 *
 * @version 2.0.0
 * @author Sagar
 * @license MIT
 *
 */

class EasyHTTP {
    // Make an http request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-type": "application/data"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/data"
                }
            })
                .then(res => res.json())
                .then(() => resolve("Resource deleted..."))
                .catch(err => reject(err));
        });
    }
}
