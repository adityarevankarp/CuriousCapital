import React from 'react';
import def from '../assets/defaultimg.png'
function ImageUploader({ image, setImage }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  React.useEffect(() => {
    if (image.length == 0)
      setImage("https://res.cloudinary.com/dy4n5em1q/image/upload/v1711747225/defaultimg_grgr0j.png")
  }, [image])
  return (
    <div className=' '>
      <div className='mx-4'>
        <label className='block'>Upload Cover image</label>
        <input
          className='cursor-pointer bg-blue-500 shadow-lg rounded-lg p-2 text-white'
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      {image && (
        <div className='mx-4'>
          <h2>Preview</h2>
          <div className='flex p-2 justify-center border rounded-2xl'>
            <img className='h-48 rounded-md shadow-md' src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
