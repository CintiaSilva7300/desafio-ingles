import { Component, OnInit } from '@angular/core';
import { Frase } from 'src/app/shared/frase.model';
import { FRASES } from './frases-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
public frases:Frase[] = FRASES
public instrucao: string = 'Traduza a frase:'
public resposta!: string;

  constructor(){
    console.log(this.frases) //objeto frase
  }

  ngOnInit(): void {

}

atualizaResposta(resposta: Event): void {
  this.resposta = (<HTMLInputElement>resposta.target).value
  console.log(this.resposta)
}
}
