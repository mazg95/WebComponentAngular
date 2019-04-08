import { TestBed } from '@angular/core/testing';

import { MailTemplateService } from './mail-template.service';

describe('MailTemplateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailTemplateService = TestBed.get(MailTemplateService);
    expect(service).toBeTruthy();
  });
});
