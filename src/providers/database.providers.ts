import { Sequelize } from 'sequelize-typescript';
import { Dog } from '../model/dog.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mariadb',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'nest',
            });
            sequelize.addModels([Dog]);
            await sequelize.sync();
            return sequelize;
        }
    }
];