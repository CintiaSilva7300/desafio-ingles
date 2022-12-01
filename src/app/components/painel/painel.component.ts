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
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase!: Frase;

  public progresso: number = 0;

  constructor() {
    this.atualizaRodada();
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

      this.rodada++;

      this.atualizaRodada();

      this.rodadaFrase = this.frases[this.rodada]

    } else (
      alert('Errada')
    )
  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = '';
  }

}
