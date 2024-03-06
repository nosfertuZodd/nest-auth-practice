import { Controller,Get,Post,Put,Delete, Body } from '@nestjs/common';
 import { createUserDto } from './dto/create-user.dto';
@Controller('user')
export class UserController {

    @Get()
findAll():string{
    return "get request"
}

@Post()
create(@Body()createUserDto: createUserDto):string{
    return `we have a name of : ${createUserDto.name}`
    
}

}
