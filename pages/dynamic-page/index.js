//This is main Products page  


import Link from 'next/link'

function products() {
  return (
    <div>
      <h1>There Is so many Products</h1>
      <h2>Product List</h2>
      <ul>
        <li><Link href="/dynamic-page/product-1">product-1</Link></li>
        <li><Link href="/dynamic-page/product-2">product-2</Link></li>
      </ul>
    </div>
  )
}

export default products
