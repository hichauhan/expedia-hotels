import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const hotels = [
            {id:1, name:"Crowne Plaza"},
            {id:2, name:"Radisson Blu"},
            {id:3, name:"Hotel City Park"},
            {id:4, name:"Maidens Hotel"},
            {id:5, name:"Taj Mahal Hotel"},
            {id:6, name:"Eros Hotel"},
            {id:7, name:"The Leela Palace Hotel"},
            {id:8, name:"Hilton Garden Inn"},
        ];
        return {hotels};
    }
}