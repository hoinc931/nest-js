import {
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getByQuery(@Res() res: Response, @Query() query: any) {
    return res.json({
      message: 'this is method gget by query',
      query,
    });
  }

  @Get()
  getABC(@Res() res: Response) {
    const message = this.appService.getAbc();
    return res.status(HttpStatus.OK).json({
      message,
    });
  }

  @Post()
  @HttpCode(201)
  create(@Req() req: Request, @Res() res: Response) {
    return res.json({
      message: req.body,
      data: [],
    });
  }
}

@Controller('api2')
export class AppController2 {
  constructor(private readonly appService: AppService) {}

  //get header method
  @Get('/header')
  mHeader(@Res() res: Response, @Headers('Authorization') headers: string) {
    return res.json({
      message: 'this is method with header',
      headers,
    });
  }

  @Get(':id')
  getById(@Res() res: Response, @Param('id') id: number) {
    return res.status(HttpStatus.OK).json({
      message: 'hello world with id = ' + id,
    });
  }

  @Delete(':id')
  deleteById(@Res() res: Response, @Param('id') id: number) {
    return res.json({
      message: 'this is api delete by id',
      id,
    });
  }

  @Put(':id')
  putById(@Res() Res: Response, @Param('id') id: number) {
    return Res.json({
      message: 'this is put method',
      id,
    });
  }

  @Patch(':id')
  patchById(@Res() res: Response, @Param('id') id: number) {
    return res.json({
      message: 'this is patch method',
      id,
    });
  }
}
