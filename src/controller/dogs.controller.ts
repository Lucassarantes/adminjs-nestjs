import { Controller, Get, HttpStatus, Req } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('dogs')
export class DogsController {
    @Get()
    findAll(@Req() res: Response) {
        res.status(HttpStatus.OK).json([]);
    }
}

// @Controller('dogs')
// export class DogsController {
//     @Get()
//     findAll(@Req() request: Request): string {
//         return 'This action returns all dogs';
//     }
// }