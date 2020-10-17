const BASE_URL = '/api/days'

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(day) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(day)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}