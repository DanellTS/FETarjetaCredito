import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjetas: any[] = [
    { titular: 'Danell Torres', numeroTarjeta: '3215 4587 5214 2563', fechaExpiracion: '11/22', cvv: '123'},
    { titular: 'Juan Perez', numeroTarjeta: '3456 7689 5214 5673', fechaExpiracion: '11/24', cvv: '143'},
    { titular: 'Sadel Fortunato', numeroTarjeta: '5050 7689 5214 5673', fechaExpiracion: '11/26', cvv: '167'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
