import { phoneNumber } from './../../../shared/validators/app.validator';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { tap, Observable, map } from 'rxjs';
import { getContactUsInfo, sendContactUs } from 'src/app/shared/constants/api.constant';
import { DataService } from 'src/app/shared/services/data.service';
import { TextOnlyValidator, emailValidator, onlySpaces, phoneValidator, startsWith } from 'src/app/shared/validators/app.validator';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  contactUsForm!: FormGroup;
  contactUsInfo$: Observable<any> | undefined;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private toastr: ToastrService) {}

  ngOnInit() {
    this.contactUsInfo$ = this.dataService.getList(`${getContactUsInfo}`).pipe(map(res => res))
    this.contactUsFormBuilder();
  }

  contactUsFormBuilder() {
    this.contactUsForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), onlySpaces(), TextOnlyValidator()]],
      email: ['', [Validators.required, emailValidator]],
      phoneNumber: ['', [
        Validators.required,
        startsWith(),
        Validators.minLength(11),
        Validators.maxLength(11),
        phoneValidator(),
        ]],
      message: ['', [Validators.required, onlySpaces(), Validators.minLength(10)]]
    })
  }

  get control() {
    return this.contactUsForm.controls;
  }


  sendContactUs() {
    this.dataService.post(`${sendContactUs}`, this.contactUsForm.value)
    .subscribe((res: any) => {
      if(res === true) {
        this.contactUsForm.reset();
        this.toastr.success('Message sent successfully');
      }
    })
  }

}
