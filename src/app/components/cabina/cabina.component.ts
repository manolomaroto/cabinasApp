import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CabinasService } from '../../services/cabinas.service';
import { Router } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.component.html',
  styleUrls: ['./cabina.component.sass']
})
export class CabinaComponent implements OnInit {

  cabina: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private cabinasService: CabinasService,
    private router: Router
    ) {
    this.activatedRoute.params.subscribe( params => {
      this.cabina = this.cabinasService.getCabina(params.id);
    });
  }

  ngOnInit() {
    this.jQueryCode();
  }

  jQueryCode() {
    $(document).ready(() => {
      $('.materialboxed').materialbox();
    });
  }

  volver() {
    this.router.navigate( ['cabinas']);
  }
}
