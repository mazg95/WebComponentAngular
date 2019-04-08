import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { MailTemplateService } from '../services/mail-template-service/mail-template.service'
import { MailTemplate } from '../models/mail-template';


@Component({
  selector: 'ng-mt-template-editor',
  templateUrl: './template-editor.component.html',
  styleUrls: ['./template-editor.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TemplateEditorComponent implements OnInit {

  @Input() advertiserId: number;
  mailTemplate: string;

  constructor(private mailTemplateService: MailTemplateService) { }

  ngOnInit() {
    this.fetchMailTemplate();
  }

  onSubmit(){
    this.mailTemplateService
    .saveMailTemplate(this.advertiserId, this.mailTemplate)
  }

  fetchMailTemplate(){
    this.mailTemplateService
    .getTemplateByAdvertiser(this.advertiserId)
    .subscribe(resp => {
      this.mailTemplate = resp
    })
  }

}
