import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public alertController: AlertController)
  {
  }

  private title = 'HomePage';

  private textInput: string = null;

  private async showInput() {
    const alert = await this.alertController.create({
      header: 'Input Contents',
      subHeader: 'value of input field is:',
      message: this.textInput,
      buttons: ['OK']
    });

    await alert.present();
  }

  public handleHello() {
    this.textInput = 'Hello';
  }

  public handleGoodbye() {
    this.textInput = 'Goodbye';
  }

  public handleUpperCase() {
    this.textInput = this.textInput.toUpperCase();
  }

  public handleLowerCase() {
    this.textInput = this.textInput.toLowerCase();
  }

  public handleMessage() {
    this.showInput();
  }

  public handleClear() {
    this.textInput = null;
  }

}
