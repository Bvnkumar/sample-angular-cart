import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFailFlag: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(4)]],
    });
  }

  loginCheck = () => {
    console.log("this.loginForm", this.loginForm);
    const data = this.loginForm.value;
    console.log("data ", data);
    this.http
      .post("http://localhost:8081/auth/loginCheck", data)
      .subscribe((data) => {
        if (data) {
          console.log("");
          this.route.navigate(["/welcome"]);
        } else {
          this.loginFailFlag = true;
        }
      });
    //obserable
  };
}
