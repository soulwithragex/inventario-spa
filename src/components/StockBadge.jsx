import React from 'react';

/**
 * Muestra un badge de color según la cantidad de stock:
 * - 0       → "Sin stock"  (rojo)
 * - 1 a 5   → "Stock bajo" (amarillo)
 * - 6+      → "Disponible" (verde)
 */
function StockBadge({ stock }) {
  if (stock === 0) {
    return <span className="badge badge-out">Sin stock</span>;
  }
  if (stock <= 5) {
    return <span className="badge badge-low">Stock bajo</span>;
  }
  return <span className="badge badge-ok">Disponible</span>;
}

export default StockBadge;
