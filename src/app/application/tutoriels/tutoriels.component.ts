/**
 * @Author Nicolas Hong-Lao
 * matricule: 1460618
 * Github user: NicolasH-L
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tutoriels',
  templateUrl: './tutoriels.component.html',
  styleUrls: ['./tutoriels.component.css']
})
export class TutorielsComponent implements OnInit {

  myParameter: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((myMap: Params) => {
      this.myParameter = myMap.id;
    });
  }

}