import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private fb: FormBuilder,
    public alertController: AlertController
  ) {
    this.createForm();
  }

  public form: FormGroup;

  createForm() {
    this.form = this.fb.group({
      name: [, Validators.required],
      age: [, Validators.required],
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Input',
      subHeader: 'Name Field',
      message: 'No numbers are allowed in Name Field',
      buttons: ['Retry'],
    });

    await alert.present();
  }

  submit() {
    console.log(this.form.value);
    let res = this.form.value;
    let name1 = res.name;
    for (let i = 0; i < name1.length; i++) {
      let samp = parseInt(name1[i]);
      if (Number.isInteger(samp)) {
        this.presentAlert();
        break;
      }
    }
  }
}
