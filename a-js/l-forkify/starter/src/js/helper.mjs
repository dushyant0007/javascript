/*
Goal of the file is to contain a couple of functions
that we reuse over and over in our project and so here in this
module we then have a central place for all of them basically  
*/

import {TIMEOUT_SEC} from './config.mjs';

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

export const getJSON = async function (url) {
    try {
        const res = await Promise.race([fetch(url),timeout(TIMEOUT_SEC)]);
        const data = await res.json();
        if (!res.ok)
            throw new Error(`${data.message} ${res.status}`)
        return data;
    }
    catch (err) {
        console.log('got an error', err)
        throw err;
    }
} 
