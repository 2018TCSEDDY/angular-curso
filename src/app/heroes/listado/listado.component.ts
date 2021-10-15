import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[]=['spiderman', 'Hulk', 'Thor'];
  heroeBorrado :string ='...';
  hayBorrado: boolean= false;

  borrarHeroe(){
    if (this.heroes.length>0){
      this.heroeBorrado = this.heroes.pop() || '...'
      console.log (this.heroeBorrado);
      this.hayBorrado=true;
    }else
    this.hayBorrado= false;
  }

}
