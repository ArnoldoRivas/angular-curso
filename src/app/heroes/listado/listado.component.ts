import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk', 'Thor','Capitan'];
  heroeBorrado: string = '';
  mostrar: boolean = false;

  borrarHeroe(){
    console.log("Borrando.....");
    this.heroeBorrado = this.heroes.shift() || '';
    if (this.heroeBorrado == '') 
      this.mostrar=false;
    else  
      this.mostrar=true;
  }
}
