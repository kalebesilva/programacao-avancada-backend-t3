import { ObjectId } from "mongodb";

export default class Favorite {
    constructor(public name: string, public url: string, public id?: ObjectId) {}
}