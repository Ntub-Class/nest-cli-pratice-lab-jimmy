import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('student')
export class StudentController {
    @Get()
    getStudent() {
        return 'OK';
    }

    @Get(':id')
    getOneStudent(@Param('id') id) {
        return id;
    }

    @Post()
    postStudent(@Body() body) {
        return 'OK';
    }

    @Put(':id')
    putStudent(@Body() body, @Param('id') id) {
        return id;
    }

    @Delete(':id')
    deleteStudent(@Param('id') id) {
        return id;
    }
}
