import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>()

  valorDeNovaTransferencia: number
  destinoDeNovaTransferencia: number

  transferir() {
    console.log('Solicitado nova transferĂȘncia')
    const valorEmitir = { valorConst: this.valorDeNovaTransferencia, destinoConst: this.destinoDeNovaTransferencia }
    this.aoTransferir.emit(valorEmitir)
    this.limparCampos()
  }

  limparCampos() {
    this.valorDeNovaTransferencia = 0;
    this.destinoDeNovaTransferencia = 0;
  }
}
