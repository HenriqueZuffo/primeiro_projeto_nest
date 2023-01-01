import { Injectable, Res } from '@nestjs/common';

@Injectable()
export class CoursesService {

    findAll(): string{
        return 'findAll Utilizando Res'
    }

}
