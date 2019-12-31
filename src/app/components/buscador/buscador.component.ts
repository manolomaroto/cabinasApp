import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CabinasService } from '../../services/cabinas.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.sass']
})
export class BuscadorComponent implements OnInit {

  cabinas: any[] = [];
  termino: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cabinasService: CabinasService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.cabinas = this.cabinasService.buscarCabina( params.termino );

      this.termino = params.termino;
    });
  }

}
