import React from 'react'
import { useParams } from 'react-router-dom'
import PostForm from './PostForm'

const Edit = () => {
  const { id } = useParams()
  console.log('Edit id:', id)
  return <PostForm type={'edit'} id={id} />
}

export default Edit
