import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  Logger,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  public intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>,
  ): Observable<unknown> {
    const { url, method }: Request = context.switchToHttp().getRequest();

    const log = Logger.log(`${method} ${url}`, context.getClass().name);

    return next.handle().pipe(tap(() => log));
  }
}
