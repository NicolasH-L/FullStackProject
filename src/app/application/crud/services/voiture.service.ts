/**
 * @Author Nicolas Hong-Lao
 * matricule: 1460618
 * Github user: NicolasH-L
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voiture } from '../models/voiture';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class VoitureService extends GenericService<Voiture, Number>{

  constructor(http: HttpClient) {
    super(http, "http://localhost:3200/apiFullstack");
  }
  
}
