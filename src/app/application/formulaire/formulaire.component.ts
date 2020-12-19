/**
 * @Author Nicolas Hong-Lao
 * matricule: 1460618
 * Github user: NicolasH-L
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Voiture } from '../crud/models/voiture';
import { VoitureService } from '../crud/services/voiture.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  carForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    modele: new FormControl('', Validators.required),
    couleur: new FormControl('', Validators.required),
    fabriquant: new FormControl('', Validators.required),
    paiement: new FormControl('', Validators.required)
  });

  car: Voiture;
  checkMessage: string = "";

  constructor(private service: VoitureService, private router: Router) { }

  ngOnInit(): void {
  }

  get form2() {
    return this.carForm.controls;
  }

  onSubmit() {
    if (this.carForm.valid) {
      this.service.post(this.carForm.value).subscribe(data => {
        this.carForm.reset();
        this.router.navigateByUrl('/accueil');
        window.alert("Location de voiture accepté!")
      });
    } else {
      this.checkMessage = "Veuillez remplir le formulaire au complet!";
    }
  }

}
