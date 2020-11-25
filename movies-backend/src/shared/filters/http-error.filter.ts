import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Request, Response } from 'express';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  public catch(exception: HttpException, host: ArgumentsHost) {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const req: Request = ctx.getRequest<Request>();
    const res: Response = ctx.getResponse<Response>();
    const status: HttpStatus = exception.getStatus();

    const { url, method } = req;

    const errorResponse = {
      code: status,
      timestamp: this.generateTimestamp(),
      path: url,
      method: method,
      message: exception.message,
    };

    Logger.error(
      `${method} ${url}`,
      JSON.stringify(errorResponse),
      'ExceptionFilter',
    );

    res.status(status).json(errorResponse);
  }

  private generateTimestamp(): string {
    return new Date().toISOString();
  }
}
