import { ErrorHandler } from "@angular/core";

export class AdminErrorHandler implements ErrorHandler
{
    handleError(error: any): void {
        console.log('*******************************************************');
        console.log(`Custom error handler, handle at ${ new Date()}`);
        console.log(error);
        console.log('');
    }
}