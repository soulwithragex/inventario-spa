import React from 'react';
import { formatPrecio } from '../utils';

/**
 * Muestra 4 tarjetas con métricas del inventario:
 * total de productos, unidades en stock, valor total y productos sin stock.
 */
function StatCards({ productos }) {
  const totalProductos  = productos.length;
  const totalStock      = productos.reduce((s, p) => s + Number(p.stock), 0);
  const valorInventario = productos.reduce((s, p) => s + Number(p.precio) * Number(p.stock), 0);
  const sinStock        = productos.filter((p) => Number(p.stock) === 0).length;

  return (
    <div className="stats">
      <div className="stat-card">
        <div className="stat-label">Total productos</div>
        <div className="stat-value">{totalProductos}</div>
      </div>

      <div className="stat-card">
        <div className="stat-label">Unidades en stock</div>
        <div className="stat-value">{totalStock}</div>
      </div>

      <div className="stat-card">
        <div className="stat-label">Valor inventario</div>
        <div className="stat-value" style={{ fontSize: '17px', paddingTop: '3px' }}>
          {formatPrecio(valorInventario)}
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-label">Sin stock</div>
        <div className={`stat-value${sinStock > 0 ? ' danger' : ''}`}>
          {sinStock}
        </div>
      </div>
    </div>
  );
}

export default StatCards;
