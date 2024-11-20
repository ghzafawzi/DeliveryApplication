import { Component, OnInit } from '@angular/core';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  private firestore = getFirestore(initializeApp(environment.firebase));

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  async login() {
    const userRef = collection(this.firestore, 'utilisateur');
    const q = query(userRef, where('email', '==', this.email), where('password', '==', this.password));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      this.showAlert('Login Failed', 'Invalid email or password');
    } else {
      this.showAlert('Login Successful', 'Welcome back!');
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