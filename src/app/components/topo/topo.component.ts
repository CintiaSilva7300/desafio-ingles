import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit{
public titulo: string = 'Aprendendo inglês'

  constructor(){

  }

  ngOnInit(): void {

  }
}
