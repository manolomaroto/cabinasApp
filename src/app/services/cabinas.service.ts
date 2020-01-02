import { Injectable } from '@angular/core';

@Injectable()
export class CabinasService {

    private cabinas: Cabina[] = [
        {
          id: 2,
          localizacion: 'Almazán',
          comentario: 'Situada en una esquina frente a una carniceria',
          img: '../../../assets/img/Cabina02Almazan.jpg',
          coordenadas: `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d444.27766668919264!
2d-2.5274375101414255!3d41.48841001150683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1577698459576!5m2!1ses!2ses"
 width="800" height="600" frameborder="0" style="border:0;" allowfullscreen=""`
        },
        {
            id: 3,
            localizacion: 'La Bañeza',
            comentario: '',
            img: '../../../assets/img/Cabina2LaBañeza.jpg',
            coordenadas: `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!
1d737.7672947799105
!2d-5.900027313006276!3d42.29838928038912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1577994011315!5m2!1ses
!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""`
          }
      ];

    constructor() {
    }

    getCabinas(): Cabina[] {
        return this.cabinas;
    }

    getCabina( id: any ) {
        return this.cabinas[id];
    }

    buscarCabina(termino: string) {
        const cabinasArr: Cabina[] = [];
        termino = termino.toLowerCase();

        for (let i = 0; i < this.cabinas.length; i++) {
            const cabinaBuscada = this.cabinas[i];

            const nombre = cabinaBuscada.localizacion.toLowerCase();

            if (nombre.indexOf( termino ) >= 0) {
                cabinaBuscada.idx = i;
                cabinasArr.push( cabinaBuscada );
            }
        }
        return cabinasArr;
      }
}

export interface Cabina {
    id: number;
    localizacion: string;
    comentario: string;
    img: string;
    coordenadas: string;
    idx?: number;
}
