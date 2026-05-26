import React, { useState, useEffect, useMemo } from 'react';

// Componentes
import StatCards      from './components/StatCards';
import TablaProductos from './components/TablaProductos';
import Modal          from './components/Modal';

// Constantes y utilidades
import { CATEGORIAS, EMPTY_FORM } from './constants';
import { cargarProductos, guardarProductos, nextId } from './utils';

/**
 * Componente raíz de la SPA.
 * Gestiona el estado global: lista de productos, búsqueda,
 * filtro por categoría y apertura del modal de crear/editar.
 */
function App() {
  // ── Estado ──────────────────────────────────────────────────
  const [productos, setProductos]             = useState(cargarProductos);
  const [busqueda, setBusqueda]               = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');
  const [modal, setModal]                     = useState(null); // null | 'crear' | 'editar'
  const [editId, setEditId]                   = useState(null);
  const [form, setForm]                       = useState(EMPTY_FORM);

  // ── Persistencia: guardar en localStorage al cambiar lista ───
  useEffect(() => {
    guardarProductos(productos);
  }, [productos]);

  // ── Lista filtrada (se recalcula solo si cambia dependencia) ─
  const filtrados = useMemo(() => {
    return productos.filter((p) => {
      const matchBusqueda  = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const matchCategoria = filtroCategoria === 'Todas' || p.categoria === filtroCategoria;
      return matchBusqueda && matchCategoria;
    });
  }, [productos, busqueda, filtroCategoria]);

  // ── Handlers CRUD ────────────────────────────────────────────

  /** Abre el modal para agregar un producto nuevo */
  function abrirCrear() {
    setForm(EMPTY_FORM);
    setEditId(null);
    setModal('crear');
  }

  /** Abre el modal precargado con los datos del producto a editar */
  function abrirEditar(producto) {
    setForm({
      nombre:    producto.nombre,
      categoria: producto.categoria,
      precio:    String(producto.precio),
      stock:     String(producto.stock),
    });
    setEditId(producto.id);
    setModal('editar');
  }

  /** Guarda los datos del formulario (crear o editar) */
  function guardar() {
    // Validación básica
    if (!form.nombre.trim() || form.precio === '' || form.stock === '') {
      alert('Por favor completa todos los campos.');
      return;
    }

    const datos = {
      nombre:    form.nombre.trim(),
      categoria: form.categoria,
      precio:    Number(form.precio),
      stock:     Number(form.stock),
    };

    if (modal === 'crear') {
      // Agregar nuevo producto con ID autogenerado
      setProductos((prev) => [...prev, { id: nextId(prev), ...datos }]);
    } else {
      // Actualizar producto existente
      setProductos((prev) =>
        prev.map((p) => (p.id === editId ? { ...p, ...datos } : p))
      );
    }

    setModal(null);
  }

  /** Elimina un producto luego de confirmar */
  function eliminar(id) {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      setProductos((prev) => prev.filter((p) => p.id !== id));
    }
  }

  // ── Render ───────────────────────────────────────────────────
  return (
    <div className="app">
      <h2 className="sr-only">Aplicación SPA Inventario de Productos</h2>

      {/* Encabezado */}
      <div className="header">
        <h1>📦 Inventario de Productos</h1>
        <button className="btn btn-primary" onClick={abrirCrear}>
          + Nuevo producto
        </button>
      </div>

      {/* Métricas */}
      <StatCards productos={productos} />

      {/* Barra de búsqueda y filtro por categoría */}
      <div className="toolbar">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          aria-label="Buscar producto"
        />
        <select
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
          aria-label="Filtrar por categoría"
        >
          <option>Todas</option>
          {CATEGORIAS.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Tabla de productos */}
      <TablaProductos
        productos={filtrados}
        onEditar={abrirEditar}
        onEliminar={eliminar}
      />

      {/* Modal crear / editar */}
      {modal && (
        <Modal
          titulo={modal === 'crear' ? 'Agregar producto' : 'Editar producto'}
          form={form}
          setForm={setForm}
          onGuardar={guardar}
          onCerrar={() => setModal(null)}
        />
      )}
    </div>
  );
}

export default App;
