// Clave usada para guardar en localStorage
export const STORAGE_KEY = 'inventario_productos_v1';

// Categorías disponibles
export const CATEGORIAS = [
  'Electrónica',
  'Ropa',
  'Alimentos',
  'Hogar',
  'Deportes',
  'Otro',
];

// Formulario vacío (para crear un producto nuevo)
export const EMPTY_FORM = {
  nombre: '',
  categoria: 'Electrónica',
  precio: '',
  stock: '',
};

// Productos de ejemplo que se cargan la primera vez
export const INIT_DATA = [
  { id: 1, nombre: 'Auriculares Bluetooth', categoria: 'Electrónica', precio: 29990, stock: 12 },
  { id: 2, nombre: 'Polera Algodón',        categoria: 'Ropa',         precio: 8990,  stock: 3  },
  { id: 3, nombre: 'Aceite de Oliva 1L',    categoria: 'Alimentos',    precio: 4590,  stock: 0  },
  { id: 4, nombre: 'Balón de Fútbol',       categoria: 'Deportes',     precio: 15990, stock: 7  },
];
