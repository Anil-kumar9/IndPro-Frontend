import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-interactive-form',
  templateUrl: './interactive-form.component.html',
  styleUrls: ['./interactive-form.component.css']
})
export class InteractiveFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  formData: FormData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', this.formData);
      // Reset the form fields
      form.resetForm();
    }
  }

  // Use this method to check for form control validity
  isControlValid(controlName: string, form: NgForm): boolean {
    this.formData.confirmPassword = form.value.confirmPassword
    this.formData.password=form.value.password
    this.formData.email=form.value.email
    this.formData.name=form.value.name
    const control = form.controls[controlName];
    return control && control.touched && !control.valid;
  }

}
