import React from 'react'

const MainContent = ({ products, loading }) => {


  return (
    <>
        {loading ? (
            <div className='flex items-center justify-center'>
                Fetching products...
            </div>
        ) : (
            <div className='p-10 flex flex-wrap justify-evenly gap-10 mb-20'>

                {products.map((product) => (
                    <section key={product.id} className='h-72 w-52 bg-white rounded-md shadow-sm'>
                        <img src={product.image} alt="" className='h-36 w-[75%] object-contain mx-auto p-3' />
                        <h1 title={product.title}className='text-center font-bold'>{product.title?.slice(0, 20)}</h1>
                        <h3 className='font-extrabold text-center'>${product.price}</h3>
                        <h3 className='font-extrabold text-center'>{product.category}</h3>
                    </section>
            ))}
            </div>
        )
        }
    </>
  )
}

export default MainContent;