import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../config/SupabaseClient'
import Navbar from './Navbar'

const AddFood = () => {
  const navigate = useNavigate()
  const [formError, setFormError] = useState(null)
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [price, setPrice] = useState('')
  const [rating, setRating] = useState('')
  const [image, setImage] = useState(null)

  

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!title || !method || !price ||!rating || !image){
      setFormError('fill the form correctly');
      return
    }

   

    ///uploading image to supabase
    const fileExt = image.name.split('.').pop();
    const fileName =`${Date.now()}.${fileExt}`;
    const filePath = `foods/${fileName}`;

    const {error: imageError} = await supabase
    .storage
    .from('images')
    .upload(filePath, image)

    if(imageError){
      console.log(imageError)
      setFormError('error uploading image');
      return
    }


    const {data} = supabase.storage.from('images').getPublicUrl(filePath)
    const publicUrl = data.publicUrl
    console.log('public url', publicUrl)

    const {error} = await supabase
    .from('foods')
    .insert({
      title, 
      method, 
      price: Number(price), 
      rating: Number(rating),
      image_url: publicUrl
    })

    if(error){
      console.log(error)
      setFormError('error adding food');
      return
    }
    if(data){
      console.log(data)
      setFormError(null)
    }
    navigate('/');
  }



  return (
    <div className='addfood'>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <div className='title'>
          <input 
          type="text" 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
        </div>

        <div className='method'>
          <input 
          type="text" 
          value={method}
          onChange={(e)=>setMethod(e.target.value)}
          />
        </div>

        <div className='method'>
          <input 
          type="file" 
          accept="image/*"
          onChange={(e)=>{
            if(e.target.files.length > 0){
              setImage(e.target.files[0])
            }
          }}
          />
        </div>



        <div>
          <input 
          type="number" 
          value={price} 
          onChange={(e)=>setPrice(e.target.value)} />
        </div>

        <div>
          <input 
          type="number" 
          value={rating} 
          onChange={(e)=>setRating(e.target.value)} />
        </div>
        <button type='submit'>add food</button>
        {formError &&<p>{formError}</p>}
      </form>
    </div>
  )
}

export default AddFood
