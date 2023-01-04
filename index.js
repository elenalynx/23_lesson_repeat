import {request} from "./request.js";

const host = 'http://localhost:8081';

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('ul');
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const body = JSON.stringify({
            name: form.elements.name.value,
            phoneNumber:form.elements.phoneNumber.value,
        });

        request(`${host}/users`, {
            method: 'POST',
            body,
            contentType: 'application/json',
        }).then((users) => {
            list.innerHTML = '';
            users.forEach(({ id, name, phoneNumber }) => {
                const item = document.createElement('li');

                item.innerHTML = `
                    <h2>${name}</h2>
                    <p>${phoneNumber}</p>
                `;

                list.append(item);
            });

            form.reset();
        }).catch(err => {
            console.log(err.message);
        })
    })

    request(`${host}/users`)
        .then((users) => {
            // console.log(users);
            //тут виключити лоадер, якщо в нас є

            users.forEach(({id, name, phoneNumber}) => {
                const item = document.createElement('li');

                item.innerHTML = `
                    <h2>${name}</h2>
                    <p>${phoneNumber}</p>
                `;

                list.append(item);
            });
        })
});