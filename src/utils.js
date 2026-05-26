import { STORAGE_KEY, INIT_DATA } from './constants';

/**
 * Carga la lista de productos desde localStorage.
 * Si no existe nada guardado, retorna los datos de ejemplo.
 */
export function cargarProductos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : INIT_DATA;
  } catch (error) {
    console.error('Error al leer localStorage:', error);
    return INIT_DATA;
  }
}

/**
 * Guarda la lista de productos en localStorage.
 * @param {Array} lista - arreglo de productos
 */
export function guardarProductos(lista) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

/**
 * Formatea un número como precio en pesos chilenos.
 * @param {number} n
 * @returns {string} Ej: "$29.990"
 */
export function formatPrecio(n) {
  return '$' + Number(n).toLocaleString('es-CL');
}

/**
 * Genera el próximo ID correlativo a partir de la lista actual.
 * @param {Array} lista
 * @returns {number}
 */
export function nextId(lista) {
  return lista.length ? Math.max(...lista.map((p) => p.id)) + 1 : 1;
}
