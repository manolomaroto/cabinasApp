import { Component, OnInit, Input } from '@angular/core';
import { Cabina } from '../../services/cabinas.service';


@Component({
  selector: 'app-cabina-tarjeta',
  templateUrl: './cabina-tarjeta.component.html',
  styleUrls: ['./cabina-tarjeta.component.sass']
})
export class CabinaTarjetaComponent implements OnInit {

  @Input() cabina: Cabina[] = [];
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }



}
