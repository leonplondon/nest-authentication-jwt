import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  root(): object {
    return {
      code: 200,
      running: true,
    };
  }
}
