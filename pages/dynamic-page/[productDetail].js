//This is Dynamaic page example lets say there is e-commerce website have plenty of products and there is product detail page for every product but eventually there is only one page but products url or we can say content of that page is only changes dynamically.

import {useRouter} from 'next/router'


const productDetail = ()=>{
    const router = useRouter();
    
    const newUrl = router.query.productDetail
    
    console.log(newUrl)

    return(
        <h1>This is Product Detail Page (Dynamic)</h1>
    )
}

export default productDetail