/**
 * @Author Nicolas Hong-Lao
 * matricule: 1460618
 * Github user: NicolasH-L
 */

import { Component, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  listVoitures: Array<Voiture>;
  public headElements = ['ID', 'Nom', 'Prenom', 'Modele', 'Couleur', 'Fabriquant', 'Paiement', 'Operations'];

  constructor(private service: VoitureService) { }

  ngOnInit(): void {
    this.getAllVoiture();
  }

  getAllVoiture(): void {
    this.service.getAll().subscribe(data => {
      this.listVoitures = data;
    }, (err) => {
      console.log(err);
    });
  }

  public delete(id: number, i: any) {
    if (window.confirm("Êtes-vous sure?")) {
      this.service.deleteById(id).subscribe(res => {
        this.listVoitures.splice(i, 1);
      }, (err) => {
        console.log(err);
      });
    }
  }

}
