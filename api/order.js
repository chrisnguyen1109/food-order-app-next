import { v4 as uuidv4 } from 'uuid';

export const orderCart = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(uuidv4());
        }, 1500);
    });
};
