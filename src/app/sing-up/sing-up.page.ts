import { Component, OnInit } from '@angular/core';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {
  email: string = '';
  nom: string = '';
  prenom: string = '';
  password: string = '';
  phoneNumber: string = '';
  type: string = '';
  ville: string = '';
  private firestore = getFirestore(initializeApp(environment.firebase));

  constructor(private alertController: AlertController) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() { }

  async signUp() {
    try {
      const userRef = collection(this.firestore, 'utilisateur');
      await addDoc(userRef, {
        email: this.email,
        nom: this.nom,
        prenom: this.prenom,
        password: this.password,
        phoneNumber: this.phoneNumber,
        type: this.type,
        ville: this.ville
      });
      this.showAlert('Sign Up Successful', 'Your account has been created.');
    } catch (error) {
      this.showAlert('Sign Up Failed', (error as any).message);
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}