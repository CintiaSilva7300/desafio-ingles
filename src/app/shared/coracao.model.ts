export class Coracao {
  constructor(
    public cheio: boolean,
    public urlCoracaoCheio:string = 'assets/img/coração.png',
    public urlCoracaoVazio: string = 'assets/img/icons8-coração-partido.png'
    )
    { }

    exibeCoracao(): string {
      if(this.cheio){
        return this.urlCoracaoCheio
      }else {
        return this.urlCoracaoVazio
      }
    }

}
