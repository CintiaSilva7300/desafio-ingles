import { Component, OnInit } from '@angular/core';
import { Coracao } from 'src/app/shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit{

  public coracaoCheio: string = 'assets/img/coração.png'
  public coracaoVazio: string = 'assets/img/icons8-coração-partido.png'

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ]

  constructor(){
    console.log(this.coracoes)
  }

  ngOnInit(): void {}
}
