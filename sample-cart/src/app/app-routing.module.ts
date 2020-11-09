import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { CartComponent } from "./cart/cart.component";
import { PaymentsComponent } from "./payments/payments.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "cart", component: CartComponent },
  { path: "payment", component: PaymentsComponent },
  { path: "account-settings", component: AccountSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
