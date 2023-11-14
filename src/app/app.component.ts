import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productoForm: FormGroup;
  title = 'Lección DAWA Rogger Parraga';
  productos: any[] = [];

  constructor(private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
    });
  }

  agregarProducto() {
    if (this.productoForm.invalid) {
      alert('Por favor, complete todos los campos antes de agregar un producto.');
      return;
    }

    // Obtener los valores de los campos del formulario
    const { codigo, nombre, tipo, precio, cantidad } = this.productoForm.value;
    // Agregar el producto solo si la validación es exitosa
    const nuevoProducto = {
      codigo,
      nombre,
      tipo,
      precio,
      cantidad
    };
    this.productos.push(nuevoProducto);
    // Limpiar el formulario después de agregar el producto
    this.productoForm.reset();
  }

  calcularValorTotal() {
    let total = 0;
    this.productos.forEach(producto => {
      total += producto.precio * producto.cantidad;
    });
    return total;
  }
}
