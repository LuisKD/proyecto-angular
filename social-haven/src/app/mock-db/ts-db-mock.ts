import { Item } from '../domain/item.model';


let ruta = "assets/";

export const ITEMS: Item[] = [
    {
        "id": 1,
        "name": "Drumset",
        "description": "It's a drumset",
        "stock": 2,
        "price": 30,
        "picture": `${ruta}Drumset.jpg`,
        "selected": false,
        "quantity": 0
    },
    {
        "id": 2,
        "name": "Mellotron",
        "description": "It's a mellotron",
        "stock": 4,
        "price": 20,
        "picture": `${ruta}Mellotron.jpg`,
        "selected": false,
        "quantity": 0
    },
    {
        "id": 3,
        "name": "Chapman Bass",
        "description": "It's a chapman bass",
        "stock": 0,
        "price": 60,
        "picture": `${ruta}Chapman_Bass.jpg`,
        "selected": false,
        "quantity": 0
    }
];