
const ImagePreview = ({ image, name }) => {
  return (
    <div className='w-32 h-32 mt-2 p-2 bg-main border border-border rounded'>
      <img
        src={image ? image : "https://firebasestorage.googleapis.com/v0/b/movie-app-7992e.appspot.com/o/c9501ff3-b7f7-4491-bf60-9eee29e52d78.png?alt=media"}
        alt={name}
        className='w-full h-full object-cover rounded'
      />
    </div>
  )
}

export default ImagePreview