import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Gallery = () => {

  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)

  async function getImages() {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=15`)
      setImages(response.data)
    } catch (error) {
      console.error('Error fetching images:', error)
    }
  }

  useEffect(function () {
    getImages()
  }, [page])

  let printnfo = <h3 className='font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (images.length > 0) {
    printnfo =
      images.map((image) => (
        <div key={image.id} className='image-container '>
          <a href={image.url} target='_blank'>
            <img className='h-40 w-60 object-cover rounded ' src={image.download_url} alt={image.author} />
            <h2 className='text-gray-300 font-bold'>{image.author}</h2>

          </a>
        </div>
      ))

  }

  return (
    <div className='p-10 bg-gray-500 h-screen w-screen '>

      <div className='flex flex-wrap justify-between gap-4 mt-10 w-full h-82% overflow-auto'>
        {printnfo}
      </div>
      <div className='flex justify-center text-gray-900 font-semibold gap-4 mt-10'>
        <button 
        style={{opacity: page ===1? '0.5': '1', cursor: page === 1 ? 'not-allowed' : 'pointer'}}
        className=' bg-gray-300 px-5 py-1 rounded'  
        onClick={() => {
          if (page > 1) {
            setImages([])
            setPage(page - 1)
          }
        }}>
          Prev
        </button>
        <h4 className='text-gray-900 font-semibold'>Page {page}</h4>
        <button className='bg-gray-300 px-5 py-1 rounded cursor-pointer' onClick={() => {
          setImages([])
          setPage(page + 1)
        }}>
          Next
        </button>
      </div>

    </div>
  )
}

export default Gallery
