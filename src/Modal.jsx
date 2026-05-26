import React from 'react';
import { CATEGORIAS } from '../constants';

/**
 * Modal reutilizable para crear o editar un producto.
 * Props:
 *   - titulo   : string  — título que aparece en el encabezado
 *   - form     : objeto  — { nombre, categoria, precio, stock }
 *   - setForm  : función — actualiza el estado del formulario
 *   - onGuardar: función — llamada al presionar "Guardar"
 *   - onCerrar : función — llamada al cancelar o hacer clic fuera
 */
function Modal({ titulo, form, setForm, onGuardar, onCerrar }) {
  // Cierra el modal si el usuario hace clic en el fondo oscuro
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onCerrar();
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
        <h2 id="modal-titulo">{titulo}</h2>

        {/* Nombre */}
        <div className="field">
          <label htmlFor="inp-nombre">Nombre del producto</label>
          <input
            id="inp-nombre"
            type="text"
            value={form.nombre}
            onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
            placeholder="Ej: Laptop Dell"
          />
        </div>

        {/* Categoría */}
        <div className="field">
          <label htmlFor="inp-categoria">Categoría</label>
          <select
            id="inp-categoria"
            value={form.categoria}
            onChange={(e) => setForm((f) => ({ ...f, categoria: e.target.value }))}
          >
            {CATEGORIAS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Precio */}
        <div className="field">
          <label htmlFor="inp-precio">Precio (CLP)</label>
          <input
            id="inp-precio"
            type="number"
            min="0"
            value={form.precio}
            onChange={(e) => setForm((f) => ({ ...f, precio: e.target.value }))}
            placeholder="Ej: 49990"
          />
        </div>

        {/* Stock */}
        <div className="field">
          <label htmlFor="inp-stock">Stock (unidades)</label>
          <input
            id="inp-stock"
            type="number"
            min="0"
            value={form.stock}
            onChange={(e) => setForm((f) => ({ ...f, stock: e.target.value }))}
            placeholder="Ej: 10"
          />
        </div>

        {/* Botones */}
        <div className="modal-actions">
          <button className="btn" onClick={onCerrar}>
            Cancelar
          </button>
          <button className="btn btn-primary" onClick={onGuardar}>
            ✓ Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
