import React from 'react'

const Upload = () => {
  const inputRef = React.useRef();
  const [uploadImage, setUploadImage] = React.useState()
  const [source, setSource] = React.useState();

  function handleChange(e) {
    const file = e.target.files[0];
    setUploadImage(file)
    console.log(file, "file")
    const url = URL.createObjectURL(file);
    setSource(url);

  }
  function handleUploadImage(e) {
    e.preventDefault();

    console.log("handleUploadImage", uploadImage)
    console.log("urlsubmit", source)
  }
  return (
    <div>
      {source ? (
        <img
          className='h-20 w-20'
          src={source}
          alt="preview" />
      ) :
        <div className="w-full m-auto p-6 text-lg text-purple-900 border-2 rounded-md  overflow-auto">{source || "No Image Selected"}</div>
      }
      <form onSubmit={(e) => handleUploadImage(e)}>

        <input
          type="file"
          name="image"
          id="image"
          accept='png,jpg,svg'
          ref={inputRef}
          onChange={(e) => handleChange(e)} />

        <button type='submit'> Upload Image</button>
      </form>

    </div>
  )
}

export default Upload
