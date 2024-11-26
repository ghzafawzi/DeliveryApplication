import { Component, OnInit } from '@angular/core';
import { Firestore, getFirestore, collection, query, where, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  nomProduit: string = '';
  quantite: string = '';
  prixTotal: string = '';

  private firestore = getFirestore(initializeApp(environment.firebase));


  constructor(private alertController: AlertController) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() { }

  async addCommande() {
    try {
      const commandeRef = collection(this.firestore, 'commande');
      await addDoc(commandeRef, {
        nomProduit: this.nomProduit,
        quantite: this.quantite,
        prixTotal: this.prixTotal
      });
      this.showAlert('Commande ajoutée', 'Votre commande a été ajoutée avec succès.');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  //delete a commande its name inputed in the nomProduit field
  async deleteCommande(nomProduit: string) {
    try {
      const q = query(collection(this.firestore, 'commande'), where('nomProduit', '==', nomProduit));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        snapshot.forEach(async (docSnapshot) => {
          await deleteDoc(doc(this.firestore, 'commande', docSnapshot.id));
        });
        this.showAlert('Success', 'Commande deleted successfully.');
      } else {
        this.showAlert('Error', 'No commande found with the given name.');
      }
    } catch (error) {
      console.error("Error deleting document: ", error);
      this.showAlert('Error', 'An error occurred while deleting the commande.');
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
