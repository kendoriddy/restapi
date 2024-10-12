import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(
    @Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN',
  ): string | any[] {
    return [
      {
        id: 1,
        name: 'John Doe',
        role: 'INTERN',
      },
      {
        id: 2,
        name: 'Jane Doe',
        role: 'ENGINEER',
      },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
