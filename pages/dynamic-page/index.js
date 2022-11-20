//This is main Products page

import Link from "next/link";

function products() {
  return (
    <div>
      <h1>There Is so many Products</h1>
      <h2>Product List</h2>
      <ul>
        <li>
          <Link href="/dynamic-page/fruits">Fruits</Link>
        </li>
        <li>
          <Link href="/dynamic-page/vegetables">Vegetables</Link>
        </li>
      </ul>
    </div>
  );
}

export default products;
