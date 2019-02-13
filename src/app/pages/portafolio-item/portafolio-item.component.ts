import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';


@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.css']
})
export class PortafolioItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;
  constructor( private route: ActivatedRoute, public productoService: ProductosService ) { }

  ngOnInit() {
    this.route.params.subscribe(parametros =>{
        this.productoService.getProducto(parametros['id'])
              .subscribe((producto: ProductoDescripcion) =>{
                //console.log(producto);
                this.id = parametros['id'];
                this.producto = producto;
              })
    });
  }

}
