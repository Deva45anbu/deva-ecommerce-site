
import "./Product.css"


export const Products = () => {

    // const [product, setProduct] = useState([])
    // const [sorted, setsorted] = useState([])
    // const [productbyCategory, setproductbyCategory] = useState([])
    // const [count, setCount] = useState(0)
    // const [categories, setCategories] = useState([])
    // const [sum, setSum] = useState(0)
    // const [memosum, setMemoSum] = useState(0)
    // const [selectedCategory, setselectedCategory] = useState('')


    // const [seconds, setSeconds] = useState(0)
    // const [minutes, setMinutes] = useState(0)
    // const [hours, setHours] = useState(0)
    // const [start, setStart] = useState(0)

    // useEffect(() => {
    //     console.log("inside useefect")

    //     let interval = null

    //     if (start == 1) {
    //         interval = setInterval(() => {
    //             setSeconds(prevSeconds => {
    //                 const newseconds = prevSeconds + 1

    //                 if (newseconds % 3 == 0) {
    //                     setMinutes(prevMinutes => {
    //                         const newMinutes = prevMinutes + 1

    //                         if (newMinutes % 3 == 0) {
    //                             setHours(prevHours => prevHours + 1)
    //                         }

    //                         if (newMinutes == 21) {
    //                             return 0
    //                         } else {
    //                             return newMinutes
    //                         }
    //                     }
    //                     )
    //                 }

    //                 if (newseconds == 12) {
    //                     return 0
    //                 } else {
    //                     return newseconds
    //                 }
    //             })
    //         }, 1000);
    //     }





    //     return () => clearInterval(interval)


    // }, [start])








    // const calulatedvalue = () => {
    //     let sum = 0
    //     for (let index = 0; index < 1; index++) {
    //         console.log("i")
    //         sum = sum + 1
    //     }
    //     return sum
    // }


    // // const caculation = useMemo(()=>{

    // // },[])
    // const caculation = calulatedvalue








    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const productResponse = await axios.get("https://dummyjson.com/products")
    //             const categoryResponse = await axios.get("https://dummyjson.com/products/categories")
    //             console.log("productResponse: ", productResponse)
    //             console.log("categoryResponse: ", categoryResponse)
    //             setProduct(productResponse.data.products)
    //             let tempproducts = [...productResponse.data.products]
    //             tempproducts.sort((a, b) => a.title.localeCompare(b.title))
    //             console.log("tempproducts: ", tempproducts)
    //             setsorted(tempproducts)
    //             if (productResponse.status == 200) {
    //                 console.log("tempproducts: ")
    //             }


    //             if (categoryResponse.status == 200) {

    //                 setCategories(categoryResponse.data)
    //             }

    //         } catch {

    //         }
    //     }

    //     fetchData()

    // }, [])


    // useEffect(() => {
    //     if (count % 5 == 0) {
    //         setSum(count * 2)
    //     }
    // }, [count])



    // // const usememoexample = useMemo(
    // //     () => {
    // //         filterProductbyCategory(data), [data]
    // //     }
    // // )

    // // function filterProductbyCategory(selectedCategory) {
    // //     // console.log("value: ")
    // //     console.log("selectedCategory: ", selectedCategory)
    // //     let tempProduct = product
    // //     console.log("tempProduct: ", tempProduct)

    // //     let resultProducts = tempProduct.filter(item =>


    // //         item.category.toLowerCase() == selectedCategory.toLowerCase()

    // //     )
    // //     console.log("resultProducts: ", resultProducts)
    // //     // setproductbyCategory(resultProducts)

    // //     return resultProducts


    // // }



    // // const filteredProducts = useMemo(() => {
    // //     console.log("selectedCategory, product: ", selectedCategory, product)
    // //     if (selectedCategory === 'select') {
    // //         return product;
    // //     }
    // //     return product.filter(item =>
    // //         item.category.toLowerCase() === selectedCategory.toLowerCase()
    // //     );
    // // }, [selectedCategory, product]);

    // const filteredProducts = (() => {
    //     if (selectedCategory === 'select') {
    //         return product;
    //     }
    //     return product.filter(item =>
    //         item.category.toLowerCase() === selectedCategory.toLowerCase()
    //     );
    // })();



    return (

        <div className="products-page">
            Products Page is under construction
        </div >
        // <div>



        //     <br></br>
        //     <br></br>
        //     <br></br>
        //     value:

        //     {caculation()}
        //     <br></br>
        //     <br></br>

        //     Products Page is Under Progress
        //     <br></br>
        //     {/* // useeffect using empty dependecy */}

        //     {
        //         product.length > 0 ?
        //             <div className="product-container">
        //                 {product.map((item, index) => {
        //                     return (
        //                         <div
        //                             className="product-items"
        //                             key={index}
        //                         >
        //                             {item.title}
        //                         </div>
        //                         // <>
        //                         //     <dt>{item.title}</dt>
        //                         //     <dd>{item.description}</dd>
        //                         // </>
        //                     )
        //                 })
        //                 }
        //             </div>
        //             :
        //             <> No records found</>
        //     }


        //     {/* // useeffect using dependecy */}
        //     Count: {count}<br></br>
        //     Sum: {sum}<br></br>
        //     <button
        //         onClick={() => { setCount(prev => prev + 1) }}
        //     >increment</button><br></br>
        //     <button
        //         onClick={() => { setCount(count - 1) }}

        //     >decrement</button><br></br>



        //     {/* Use Memo */}

        //     <input></input><br></br>
        //     <input></input><br></br>
        //     Sum: <br></br>


        //     <div>
        //         <div>
        //             <select
        //                 onChange={(e) =>
        //                     setselectedCategory(e.target.value)
        //                     // filterProductbyCategory(e.target.value)
        //                 }

        //             >
        //                 <option key="select" value="select" default>Select</option>
        //                 {
        //                     categories.length > 0 ?
        //                         categories.map((item, index) => {
        //                             return (
        //                                 <option
        //                                     key={index}
        //                                     value={item.name}
        //                                 >
        //                                     {item.name}
        //                                 </option>
        //                             )
        //                         })
        //                         :
        //                         <option key="0" value="select" default>Select</option>

        //                 }

        //             </select>


        //         </div>
        //         <>
        //             {/* {filteredProducts} */}
        //         </>
        //         <>
        //             {
        //                 filteredProducts.length > 0 ?
        //                     <div className="product-container">
        //                         {filteredProducts.map((item, index) => {
        //                             return (
        //                                 <div
        //                                     className="product-items"
        //                                     key={index}
        //                                 >
        //                                     {item.title}
        //                                 </div>
        //                                 // <>
        //                                 //     <dt>{item.title}</dt>
        //                                 //     <dd>{item.description}</dd>
        //                                 // </>
        //                             )
        //                         })
        //                         }
        //                     </div>
        //                     :
        //                     <> No records found</>
        //             }</>
        //     </div>

        //     <div>
        //         <div>Sorted Prodcuts</div>
        //         <>
        //             {
        //                 sorted.length > 0 ?
        //                     <div className="product-container">
        //                         {sorted.map((item, index) => {
        //                             return (
        //                                 <div
        //                                     className="product-items"
        //                                     key={index}
        //                                 >
        //                                     {item.title}
        //                                 </div>
        //                                 // <>
        //                                 //     <dt>{item.title}</dt>
        //                                 //     <dd>{item.description}</dd>
        //                                 // </>
        //                             )
        //                         })
        //                         }
        //                     </div>
        //                     :
        //                     <> No records found</>
        //             }</>            </div>


        //     <div className="stopwatch-container">
        //         <div>

        //             <div>hours: {hours}</div>
        //             <div>minutes: {minutes}</div>
        //             <div>seconds: {seconds}</div>

        //         </div>


        //         <div className="stopwatch-button-container">
        //             <button
        //                 className="stopwatch-button"
        //                 onClick={() => setStart(1)}
        //                 disabled={start}
        //             >Start</button>
        //             <button
        //                 className="stopwatch-button"
        //                 onClick={() => setStart(0)}
        //             >Stop</button>
        //             <button
        //                 className="stopwatch-button"
        //                 onClick={() => {
        //                     setStart(0)
        //                     setSeconds(0)
        //                     setMinutes(0)
        //                     setHours(0)
        //                 }}
        //                 disabled={!start}
        //             >Reset</button>
        //         </div>


        //     </div>

        // </div>
    )
}