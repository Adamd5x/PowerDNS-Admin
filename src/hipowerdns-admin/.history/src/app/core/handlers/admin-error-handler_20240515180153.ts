import { ErrorHandler } from "@angular/core";

export class AdminErrorHandler implements ErrorHandler
{
    handleError(error: any): void {
        console.log('*******************************************************');
        console.log(`Custom error handler, hadnle at ${ new Date()}`);
        console.log(JSON.stringify(error));
        console.log('');
    }
}