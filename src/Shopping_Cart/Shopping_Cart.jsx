import { act, useReducer, useState } from "react";

const cart = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default function App() {
  return <FilterableProductTable products={cart} />;
}

function reducer(state, action) {
  switch (action.type) {
    case "FILTER_ITEM": {
      return {
        ...state,
        filterText: action.payload
      };
    }
    case "IN_STOCK": {
      return {
        ...state,
        inStockOnly: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
const initState = {
  filterText: "",
  inStaockOnly: false
};
function FilterableProductTable({ products }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <SearchBar
        filterText={state.filterText}
        inStockOnly={state.inStockOnly}
        onFilterTextChange={(e) =>
          dispatch({ type: "FILTER_ITEM", payload: e })
        }
        onInStockOnlyChange={(e) => dispatch({ type: "IN_STOCK", payload: e })}
      />
      <ProductTable
        products={products}
        filterText={state.filterText}
        inStockOnly={state.inStockOnly}
      />
    </>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  let lastCategory = null;
  const rows = [];
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase())) return;
    if (inStockOnly && !product.stocked) return;
    if (product.category !== lastCategory) {
      rows.push(
        <ProductTableCategoryRow product={product} key={product.category} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

function ProductTableCategoryRow({ product }) {
  return (
    <tr>
      <th colSpan="2">{product.category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
