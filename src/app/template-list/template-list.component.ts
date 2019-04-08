import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MailTemplateService } from '../services/mail-template-service/mail-template.service'
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TemplateListComponent implements OnInit {
  headers = [
    {prop: 'advertiserId', name: 'AdvertiserID'},
    {prop: 'advertiserName',  name: 'AdvertiserName'},
    {prop: 'lastUpdateDate', name: 'Last Update'}
  ];

  templates = [];
  
  loadingIndicator: boolean = true;
  @ViewChild(DatatableComponent) table: DatatableComponent;


  constructor(private mailTemplateService: MailTemplateService) { }

  ngOnInit() {
    this.mailTemplateService
      .getAllTemplates()
      .subscribe(resp => {
        this.templates = resp;
      })
  }

}
