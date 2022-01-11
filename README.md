# nest-js app - project in an other branch :v


## Install global nestjs and create an project

```bash
# install nestjs global
$ npm install -b @nestjs-cli

# Create/generate an nestjs app
$ nest new "name-project"
```

<!-- --------- More Package modules -------- -->
## More Package modules
 - cors
 - bordy-parser
 - morgan

<!--  -->
## Create/geanerate more Module, Provider

```bash

# Module
$ nest g module [name-module]

# Controller - Handling request and response 
$ nest g controller [name-controller]

# Service
$ nest g service [name-service]

#
$ nest g class task/task.entity
```

##  Terms
 - Decorator: Decorators có thể được định nghĩa cho một lớp, một phương thức hoặc một thuộc tính. Bắt đầu băng @, ví dụ: @Controller(), @Injectable(),...

## Method and Decorators:
 - @Module(), @Controller(), @Injectable(),... --> Decorator lần lượt cho module, controller, service,...
 - Methods: @Get([end-point]), @Post(), @Delete(),...
 - @Req (@Request) --> req, @Res (@Response) --> res, @Next() --> next, @Param(params: string) --> req.params / req.params[param], @Body(params: string) --> req.body / req.body[param], @Query(query: string) --> req.query / req.query[param], @Session() --> req.session, @Headers(param: string) --> req.headers / req.headers[param], @HostParam() --> req.hosts, @Ip() --> req.ip

## Request Payload
// create-cat.dto.ts

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
