import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  // fake implementation of logger service
  let logger : any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    logger = jasmine.createSpyObj('LoggerService',['log']);
    service = TestBed.inject(CalculatorService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers',()=>{

    //expect(service.add(2,3)).toBe(5,"unexpected add result");
    expect(service.add(2,3)).toBe(5);

    logger.log('testing');
    expect(logger.log).toHaveBeenCalledTimes(1);
  })

  it('should substract two numbers',()=>{
    expect(service.substract(5,3)).toBe(2);
  })
});
