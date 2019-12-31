import { Component, OnInit } from '@angular/core';

import { CabinasService, Cabina } from '../../services/cabinas.service';


@Component({
  selector: 'app-cabinas',
  templateUrl: './cabinas.component.html',
  styleUrls: ['./cabinas.component.sass']
})
export class CabinasComponent implements OnInit {

  cabinas: Cabina[] = [];
  constructor(
    private cabinasService: CabinasService
  ) { }

  ngOnInit() {
    this.cabinas = this.cabinasService.getCabinas();
  }

}
