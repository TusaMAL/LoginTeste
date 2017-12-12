import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";

//Models
import { User } from "../../models/user";

//Pages
import { LoginPage } from "../login/login";

//Providers
import { AuthProvider } from "../../providers/auth/auth";
import { MiscProvider } from "../../providers/misc/misc";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  user = {} as User;
  registerForm: FormGroup;




  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private authProvider: AuthProvider,
    private miscProvider: MiscProvider,
    private http: Http
  ) {
    //Form Validations
    this.registerForm = this.formBuilder.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(32)
        ])
      ]
    });

  }

  //Return if the field is required, not valid and if is touched
  requiredField(property: string) {
    let form = this.registerForm.get(property);

    return form.hasError('required') && !form.valid && form.touched;
  }

  //To check the email format with angular Validator Regex
  badlyFormated(property: string){
    let form = this.registerForm.get(property);

    return form.hasError('email') && form.touched;
  }

  //to change property unfortunately it's not used :(
  errorCss(property: string) {
    return {
      'has-error': this.requiredField(property)
    }
  }

  //Creating user on firebase
  onSubmit() {
    let loading = this.miscProvider.createLoading('Creating...');
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.authProvider.emailSignUp(this.registerForm.value).then(success => {
        this.navCtrl.setRoot(LoginPage);
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
      });
    }
  }

  //Using httpbin api only for test purposes
  onSubmit2() {
    console.log(this.registerForm.value);
    this.http
      .post("https://httpbin.org/post", JSON.stringify(this.registerForm.value))
      .map(success => success)
      .subscribe(success => {
        console.log(success);
        //Reset o form
        this.registerForm.reset();
      }),
      (error: any) => console.log(error);
  }
}
