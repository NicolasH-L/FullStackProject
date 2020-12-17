/**
 * @Author Nicolas Hong-Lao
 * matricule: 1460618
 * Github user: NicolasH-L
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../models/voiture';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  voiture: Voiture;
  updateCarForm: FormGroup;
  checkMessage: string = "";

  constructor(private service: VoitureService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idToUpdate'];
    this.service.getById(this.id).subscribe(res => {
      this.voiture = res;
    }, (err) => {
      console.log(err);
    });

    this.updateCarForm = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      modele: new FormControl('', Validators.required),
      couleur: new FormControl('', Validators.required),
      fabriquant: new FormControl('', Validators.required),
      paiement: new FormControl('', Validators.required)
    });
  }

  get carFormUpdate() {
    return this.updateCarForm.controls;
  }

  public updateCar() {
    if (this.updateCarForm.valid) {
      this.service.update(this.id, this.updateCarForm.value).subscribe(() => {
        this.router.navigateByUrl('crud');
      });
    } else {
      this.checkMessage = "Veuillez remplir le formulaire au complet!";
    }
  }

}
