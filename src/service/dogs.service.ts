import { Injectable, Inject } from "@nestjs/common";
import { CreateDogDto } from '../dto/create-dog.dto';
import { Dog } from '../model/dog.entity';

@Injectable()
export class DogsService {
    constructor(
        @Inject('DOGS_REPOSITORY')
        private dogsRepository: typeof Dog
    ){}

    async findAll(): Promise<Dog[]> {
        return this.dogsRepository.findAll<Dog>();
    }
}