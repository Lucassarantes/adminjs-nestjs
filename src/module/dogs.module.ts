import { Module } from '@nestjs/common';
import { DogsController } from '../controller/dogs.controller';
import { DogsService } from '../service/dogs.service';
import { dogsProviders } from '../providers/dog.providers';
import { DatabaseModule } from './database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [DogsController],
    providers: [
        DogsService,
        ...dogsProviders,
    ],
})
export class DogsModule {}