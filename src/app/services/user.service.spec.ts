import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';


describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({  
      imports :[HttpClientTestingModule],
      providers : [UserService,HttpClientTestingModule]    
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  it('should retrieve all users',()=>{
    service.getUsers().subscribe((usersData)=>{
      expect(usersData).toBeTruthy();
    })
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toEqual('GET');
    req.flush({payload : {}})
  })
});
