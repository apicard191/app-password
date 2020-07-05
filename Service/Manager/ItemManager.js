import {ItemAPIService} from '../API/ItemAPIService';

export class ItemManager {
    constructor(){
        this.itemAPIService = new ItemAPIService();
    }
    search(term) {
        return this.itemAPIService.search();
    }
    get(id) {
        return this.itemAPIService.get(id);

    }
}
