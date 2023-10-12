import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwidXNlck5hbWUiOiJpbml0IiwiZnVsbE5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsicmVxdWlyZSI6e30sImluaXQiOnsiX2lkIjp0cnVlLCJmdWxsTmFtZSI6dHJ1ZSwidXNlck5hbWUiOnRydWUsInBhc3N3b3JkIjp0cnVlfX19LCJza2lwSWQiOnRydWUsInNlbGVjdGVkIjp7Il9fdiI6MH0sImV4Y2x1ZGUiOnRydWV9LCIkaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9pZCI6IjY1MjZmZTQ3Nzg2NzkzNDA4YzlkYzJlMyIsImZ1bGxOYW1lIjoiRGFuaWVsIE1vcmFsZXMiLCJ1c2VyTmFtZSI6ImRhbmllbG0wNzEiLCJwYXNzd29yZCI6IiQyYiQxMCROcDJEbjRVMHIyTzBMeUJVQ3dHd2J1SjNkb1NHa3J4Nmx3SU5XYUJOYkVlZDZ0YzJlc210VyJ9LCJpYXQiOjE2OTcwNzgzMjEsImV4cCI6MTY5NzA4NTUyMX0.rXEjvSL0Obj2WlJZ1rbpTu-p5NRDcdM6gCKvd-ro92Q`;
    return next.handle(
      httpRequest.clone({ setHeaders: { Authorization: token } })
    );
  }
}
