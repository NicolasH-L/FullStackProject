/**
 * @Author Nicolas Hong-Lao
 * matricule: 1460618
 * Github user: NicolasH-L
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../../models/voiture';
import { VoitureService } from '../../services/voiture.service';

@Component({
  selector: 'app-read-only',
  templateUrl: './read-only.component.html',
  styleUrls: ['./read-only.component.css']
})
export class ReadOnlyComponent implements OnInit {

  id: number;
  voiture: Voiture;
  readOnlyForm: FormGroup;

  constructor(private service: VoitureService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(res => {
      this.voiture = res;
    }, (err) => {
      console.log(err);
    });

    this.readOnlyForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      modele: new FormControl(''),
      couleur: new FormControl(''),
      fabriquant: new FormControl(''),
      paiement: new FormControl('')
    });
  }
  
}
