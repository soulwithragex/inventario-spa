# Inventario de Productos — SPA con React

Aplicación web de una sola página (SPA) para gestionar un inventario de productos con React 18 y localStorage.

## Instalación

### Requisitos

- Node.js v14 o superior → [https://nodejs.org](https://nodejs.org/)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/soulwithragex/inventario-spa.git

# 2. Entrar a la carpeta
cd inventario-spa

# 3. Instalar dependencias
npm install

# 4. Iniciar la aplicación
npm start
```

La aplicación abre automáticamente en `http://localhost:3000`

## Cómo usar la aplicación

### Agregar un producto

1. Haz clic en el botón **Nuevo producto**
2. Completa el formulario: nombre, categoría, precio y stock
3. Haz clic en **Guardar**

### Editar un producto

1. Haz clic en el botón **✏️** en la fila del producto
2. Modifica los campos que necesites
3. Haz clic en **Guardar**

### Eliminar un producto

1. Haz clic en el botón **🗑** en la fila del producto
2. Confirma la eliminación

### Buscar un producto

- Escribe en la barra de búsqueda para filtrar por nombre en tiempo real

### Filtrar por categoría

- Usa el selector desplegable junto a la barra de búsqueda

## Estados de stock

| Estado | Condición |
|--------|-----------|
| Disponible | 6 o más unidades |
| Stock bajo | Entre 1 y 5 unidades |
| Sin stock | 0 unidades |

## Notas

- Los datos se guardan automáticamente en el navegador (localStorage), por lo que se conservan al recargar la página.
- No requiere conexión a internet ni base de datos.
