import { TestBed } from '@angular/core/testing';

import { MyProfileServiceService } from './my-profile-service.service';

describe('MyProfileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyProfileServiceService = TestBed.get(MyProfileServiceService);
    expect(service).toBeTruthy();
  });
});
