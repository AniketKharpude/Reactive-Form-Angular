import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';



 registerForm: FormGroup;
    submitted = false;
    Aniket:any=[];
    Flag:boolean=false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit(e) {
      console.log(e);
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        
        console.log("this.registerForm",this.registerForm.value);
        this.Aniket.push(this.registerForm.value)
        console.log("Print",this.Aniket)
        this.registerForm.reset();



    }
    
Delete(e){
  console.log(e);
  this.Aniket.splice(e, 1);
}
Edit(z){
  console.log(z);
  this.registerForm.patchValue(z);
  this.Flag=true;
}
}
