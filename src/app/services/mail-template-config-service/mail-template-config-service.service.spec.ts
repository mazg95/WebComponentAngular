import { TestBed } from '@angular/core/testing';

import { MailTemplateConfigService } from './mail-template-config.service';

describe('MailTemplateConfigServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailTemplateConfigService = TestBed.get(MailTemplateConfigService);
    expect(service).toBeTruthy();
  });
});
