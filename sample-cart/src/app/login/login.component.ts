import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  loginCheck = () => {
    console.log("this.loginForm", this.loginForm.value);
    const data = this.loginForm.value;
    this.http
      .get("http://localhost:8081/users/getuser/31")
      .subscribe((data) => {
        console.log("data", data);
      });
    //obserable
  };
}
