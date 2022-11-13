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
    <div className='flex  place-items-center flex-col  rounded bg-gray-100  mx-20 mt-20 '>
      {source ? (
          <div className="grid place-content-center mt-12">

        <img
          className='h-40 w-40 rounded'
          src={source}
          alt="preview" />

          </div>
      ) :
        <div className="grid place-content-center mt-12">
          <div className="w-full m-auto p-6 text-lg text-purple-900 border-2 rounded-md  overflow-auto">{source || "No Image Selected"}</div></div>
      }
      <form onSubmit={(e) => handleUploadImage(e)} className="flex  place-items-center flex-col  rounded bg-gray-100  mx-20 mt-20 ">
      <div className="grid place-content-center mb-12">

        <input
        className='w-full m-auto p-6 text-lg text-purple-900 border-2 rounded-md  overflow-auto'
          type="file"
          name="image"
          id="image"
          accept='png,jpg,svg'
          ref={inputRef}
          onChange={(e) => handleChange(e)} />
       </div>
  <div className="grid place-content-center mb-12">
        <button  className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' type='submit'> Upload Image</button>
        </div>
      </form>

    </div>
  )
}

export default Upload
