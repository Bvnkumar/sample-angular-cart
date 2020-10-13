import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signupSuccess : boolean;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      userName: ["", [Validators.required]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(4)]],
    });
  }

  signupClick = () => {
    console.log("this signup form", this.signUpForm);
    const data = this.signUpForm.value;
    console.log(" data ", data);
    this.http
      .post("http://localhost:8081/users/create", data)
      .subscribe((data) => {
        this.signupSuccess=true;
        // if (data) {
        //   this.route.navigate(["/welcome"]);
        // }
        setTimeout(() =>{ this.route.navigate(["/login"]); }, 3000);
      });
  };
}
