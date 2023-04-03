import fetch from 'node-fetch';
const roomService = {};

const baseUrl = 'http://localhost:5555';

roomService.incrementNumUsers = function (roomId) {
    return fetch(`${baseUrl}/rooms/${roomId}/numUsers/increment`, {
        method: 'PATCH'
    }).then(res => res.json());
}

roomService.decrementNumUsers = function (roomId) {
    return fetch(`${baseUrl}/rooms/${roomId}/numUsers/decrement`, {
        method: 'PATCH'
    }).then(res => res.json());
}

export default roomService;