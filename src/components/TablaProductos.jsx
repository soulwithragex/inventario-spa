import React from 'react';
import StockBadge from './StockBadge';
import { formatPrecio } from '../utils';

/**
 * Tabla que muestra la lista de productos filtrados.
 * Props:
 *   - productos : arreglo de productos a mostrar
 *   - onEditar  : función(producto) — abre el modal de edición
 *   - onEliminar: función(id)       — elimina el producto
 */
function TablaProductos({ productos, onEditar, onEliminar }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.length === 0 ? (
            // Estado vacío
            <tr>
              <td colSpan="7">
                <div className="empty">
                  <span className="empty-icon" aria-hidden="true">📭</span>
                  No hay productos que coincidan con la búsqueda.
                </div>
              </td>
            </tr>
          ) : (
            productos.map((producto, index) => (
              <tr key={producto.id}>
                <td className="col-num">{index + 1}</td>
                <td className="col-nombre">{producto.nombre}</td>
                <td className="col-categoria">{producto.categoria}</td>
                <td>{formatPrecio(producto.precio)}</td>
                <td>{producto.stock}</td>
                <td>
                  <StockBadge stock={producto.stock} />
                </td>
                <td>
                  <div className="actions-cell">
                    {/* Botón editar */}
                    <button
                      className="btn btn-edit"
                      onClick={() => onEditar(producto)}
                      aria-label={`Editar ${producto.nombre}`}
                    >
                      ✏️
                    </button>

                    {/* Botón eliminar */}
                    <button
                      className="btn btn-danger"
                      onClick={() => onEliminar(producto.id)}
                      aria-label={`Eliminar ${producto.nombre}`}
                    >
                      🗑
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TablaProductos;
