export function request(url, { method = 'GET', body = null, contentType = null } = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        if (contentType) {
            xhr.setRequestHeader('content-type', contentType);
        }
        xhr.send(body);


        xhr.onload = () => {
            resolve(JSON.parse(xhr.response));
        }

        xhr.onerror = () => {
            const error = new Error('XHR Error');

            reject(error);
        }
    })
}