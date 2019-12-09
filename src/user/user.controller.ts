import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUser() {
        return 'OK';
    }

    @Get(':id')
    getOneUser(@Param('id') id) {
        return id;
    }

    @Post()
    postUser(@Body() body) {
        return 'OK';
    }

    @Put(':id')
    putUser(@Body() body, @Param('id') id) {
        return id;
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return id;
    }
}
