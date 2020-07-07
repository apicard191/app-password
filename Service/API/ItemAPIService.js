const items = [
    {
        id: 1,
        title: 'Title',
        vote_average: '3.4',
        description: 'Ceci est une description de l\'article 1',
        img: ''
    },
    {
        id: 2,
        title: 'Title 1',
        vote_average: '3.4',
        description: 'Ceci est une description de l\'article 2',
        img: ''
    },
    {
        id: 3,
        title: 'Title 2',
        vote_average: '3.4',
        description: 'Ceci est une description de l\'article 3',
        img: ''
    },
    {
        id: 4,
        title: 'Title 3',
        vote_average: '3.4',
        description: 'Ceci est une description de l\'article 4',
        img: ''
    },
    {
        id: 5,
        title: 'Title 4',
        vote_average: '3.4',
        description: 'Ceci est une description de l\'article 5',
        img: ''
    },
];

class ItemAPIService {
    search(term) {
        return new Promise((resolve, reject) => {
            this.wait = setTimeout(() => {
                resolve(items);
            }, 500)
        });
    }
    get(id) {
        return items[id];
    }
}
const itemAPIService = new ItemAPIService();

export default itemAPIService;
