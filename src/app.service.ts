import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <div ><h1 style="color:red;">Hello world</h1></div>
    `;
  }

  getAbc(): string {
    return 'hello my friend';
  }
}
