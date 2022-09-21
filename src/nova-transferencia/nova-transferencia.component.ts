import { Component } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: number = 345

  transferir() {
    console.log('Solicitado nova transferência')
    console.log('Valor: ', this.valor)
    console.log('Destino: ', this.destino)
  }
}
