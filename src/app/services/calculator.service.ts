import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService : LoggerService) { }

  add(num1 : number,num2 : number){
    this.loggerService.log('add executed');
    return num1 + num2;
  }

  substract(num1 : number,num2 : number){
    this.loggerService.log('substract executed');
    return num1 - num2;
  }
}
