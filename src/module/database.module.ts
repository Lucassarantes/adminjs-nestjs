import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dog } from '../model/dog.entity';
import { databaseProviders } from '../providers/database.providers';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest',
      autoLoadModels: true, // Automatically discovers and loads models
      synchronize: true, // Auto-create tables based on model definitions (only for development, disable in production)
    }),
    SequelizeModule.forFeature([Dog]), // Import all Sequelize models here
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
