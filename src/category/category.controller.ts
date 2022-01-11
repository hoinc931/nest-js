import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
// import { Response } from 'express';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly cateService: CategoryService) {}

  @Get()
  get(): Promise<CategoryEntity[]> {
    return this.cateService.findAll();
  }

  @Get(':id')
  getOne(@Param() params: any) {
    return this.cateService.findOne(params.id);
  }

  @Post()
  create(@Body() cate: CategoryEntity) {
    if (!cate.name) {
      return {
        message: 'Create category failed.',
        status: false,
      };
    }
    return this.cateService.create(cate);
  }

  @Put()
  update(@Body() body: CategoryEntity) {
    return this.cateService.update(body);
  }

  @Delete(':id')
  delete(@Param() params: any) {
    return this.cateService.delete(params);
  }

  // this post method using formdata
  @Post('/test')
  @UseInterceptors(FileInterceptor('image'))
  test(@UploadedFile() file: Array<Express.Multer.File>, @Body() body: any) {
    console.log('this is file: ', file);
    console.log('this is body: ', body.name);
    return 'hello world';
  }
}
