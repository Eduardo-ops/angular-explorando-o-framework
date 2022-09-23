import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaDeTransferencia: any[]

  constructor() {
    this.listaDeTransferencia = []
  }

  get getAllTransferencias() {
    return this.listaDeTransferencia
  }

  adicionarTransferencia(transferencias: any) {
    this.hidratar(transferencias)
    this.getAllTransferencias.push(transferencias)
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date()
  }
}
