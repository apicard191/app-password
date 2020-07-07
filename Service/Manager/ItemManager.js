import itemAPIService from '../API/ItemAPIService';

class ItemManager {
    search(term) {
        return itemAPIService.search();
    }
    get(id) {
        return itemAPIService.get(id);

    }
}
const itemManager = new ItemManager();

export default itemManager;
