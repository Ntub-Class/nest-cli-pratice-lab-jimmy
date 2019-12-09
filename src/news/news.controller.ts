import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';

@Controller('news')
export class NewsController {
    @Get()
    getNews() {
        return 'OK';
    }

    @Get(':id')
    getOneNews(@Param('id') id) {
        return id;
    }

    @Post()
    postNews(@Body() body) {
        return 'OK';
    }

    @Put(':id')
    putNews(@Body() body, @Param('id') id) {
        return id;
    }

    @Delete(':id')
    deleteNews(@Param('id') id) {
        return id;
    }
}
