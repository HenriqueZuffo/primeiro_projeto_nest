import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCoursesDto } from './dto/create-courses.dto'; 
import { UpdateCoursesDto } from './dto/update-courses.dto';

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
    create(@Body() body: CreateCoursesDto){
        return body
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() body: UpdateCoursesDto){
        return body
    }

    @Delete(":id")
    remove(@Param() params){
        return `Exclusao do curso ${params.id}`
    }

}
