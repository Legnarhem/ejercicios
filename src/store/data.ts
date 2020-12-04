import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import Store from './index';

@Module({
    dynamic: true,
    store: Store,
    name: 'dataStore'
})
export default class DataModule extends VuexModule {
    private _data = {
        people: [
            {
                uid: '1', name: 'Andrés', surname: 'Gómez', age: 10, height: 180,
                weight: 75,
                country: { id: '1', countryName: 'España', region: 'Europa' },
                study: { id: '2', level: 'Instituto' },
                gender: { id: '1', type: 'Hombre' },
                bloodType: { id: '1', bloodName: 'A' }
            },
            {
                uid: '2', name: 'María', surname: 'Martínez', age: 40, height: 165,
                weight: 55,
                country: { id: '2', countryName: 'Francia', region: 'Europa' },
                study: { id: '1', level: 'Universidad' },
                gender: { id: '2', type: 'Mujer' },
                bloodType: { id: '2', bloodName: 'B' }
            },
            {
                uid: '3', name: 'Juan', surname: 'Palacios', age: 85, height: 160,
                weight: 70,
                country: { id: '3', countryName: 'Colombia', region: 'America' },
                bloodType: { id: '3', bloodName: 'AB' }
            },
            {
                uid: '4', name: 'Marta', surname: 'Domingo', age: 25, height: 180,
                weight: 70,
                country: { id: '4', countryName: 'Japón', region: 'Asia' },
                bloodType: { id: '4', bloodName: 'O' }
            },
            {
                uid: '5', name: 'Fausta', surname: 'Sanz', age: 55, height: 155,
                weight: 45
            }
        ]
    }

    @Mutation
    public setData(newList: any) {
        this._data = {...newList};
    }
    get data() {
        return this._data;
    }
}