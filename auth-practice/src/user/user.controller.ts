/* eslint-disable prettier/prettier */
import { Controller,Get,Post,Put,Delete, Body, Param } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';


@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

@Get()
findAll(): User[]{
    return this.userService.findAll()
}
@Get(':id')
findOne(@Param('id')id):User{
    return this.userService.findOne(id)
}


@Put(':id')
update(@Body() updateUserDto:createUserDto,@Param('id')id ):string{
    return `Updated ${id} : with ${updateUserDto}`
}



@Delete(':id')
delete(@Param('id')id):string{
    return `item is deleted ${id}`
}

@Post()
create(@Body()createUserDto: createUserDto):string{
    return `we have a name of : ${createUserDto.name}`    
}


}

 


