import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private readonly courseService: CoursesService){}

    @Get()
    finAll(@Res() res): string{
        return res.status(200).send(this.courseService.findAll())
    }

    // @Get(":id")
    // findOne(@Param() params): string{
    //     return `Curso ${params.id}`    
    // }
    

    @Get(":id")
    findOne(@Param("id") id: string){
        return `Curso ${id}`
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body){
        return body
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() body){
        return `Atualicacao do Curso #${id}, \n${body}`
    }

    @Delete(":id")
    remove(@Param() params){
        return `Exclusao do curso ${params.id}`
    }

}
