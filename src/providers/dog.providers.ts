import { Dog } from '../model/dog.entity';

export const dogsProviders = [
    {
        provide: 'DOGS_REPOSITORY',
        useValue: Dog,
    }
]