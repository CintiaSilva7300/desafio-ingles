import { Component, OnInit } from '@angular/core';
import { Frase } from 'src/app/shared/frase.model';
import { FRASES } from './frases-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta!: string;

  public rodada: number = 0;
  public rodadaFrase!: Frase;

  constructor() {
    //console.log(this.frases) //objeto frase
    this.rodadaFrase = this.frases[this.rodada]
    // console.log(this.rodadaFrase)
  }

  ngOnInit(): void {

  }

  atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  verificarResposta(): void { //trocar pergunta da rodada

    if (this.rodadaFrase.frasePortugues === this.resposta) {
      alert('Correta')

      this.rodada++

      //ATUALIZA O OBJETO RODADAFRASE
      console.log(this.rodada)
      this.rodadaFrase = this.frases[this.rodada]
      // console.log(this.rodadaFrase)

    } else (
      alert('Errada')
    )
  }

}
