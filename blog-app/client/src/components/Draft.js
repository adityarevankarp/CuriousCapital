import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TextField, Tooltip } from '@mui/material'
import { Button } from '@mui/material'
import { Info } from '@mui/icons-material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import ImageUpload from './ImageUpload';

const imageUrlRegex = /^(http|https):\/\/.*\.(jpeg|jpg|gif|png)$/i;
const base64Regex = /^data:image\/(jpeg|jpg|gif|png);base64,/i;

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};
function checkImageFormat(input) {
  if (imageUrlRegex.test(input)) {
    return 'deployed';
  } else if (base64Regex.test(input)) {
    return 'base64';
  } else {
    return 'unknown';
  }
}
const Draft = ({ isAuthenticated }) => {
  const [title, setTitle] = useState(localStorage.getItem('title') || '')
  const [image, setImage] = useState([]);
  const [content, setContent] = useState(localStorage.getItem('content') || '')
  const [mode, setMode] = useState('edit');
  useEffect(()=>{
    localStorage.setItem('title',title)
  },[title])

  useEffect(()=>{
    localStorage.setItem('content',content)
  },[content])
  const modeChange = (e) => {
    setMode(e.target.value)
  }
  const upload = () => {
    const data = new FormData();
    data.set('title', title);
    data.set('content', content)
    if (checkImageFormat(image) === 'base64')
      data.set('file', image)
    fetch('/api/blog/create', {
      method: 'POST',
      body: data
    })
      .then(response => response.json())
      .then(data => {
        window.location.replace(`/blog/${data.id}`);
      })
      .catch(error => console.error(error));
  }
  return (
    <div className='w-[100%] p-4'>
      <div className='m-5 flex relative  justify-between'>
        <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="outlined" label="Title" variant="outlined" />
        <Button variant="contained" onClick={() => {
          isAuthenticated ? upload() : window.location.replace('/login');
        }} className='absolute top-0 right-1'>UPLOAD</Button>
      </div>
      <ImageUpload image={image} setImage={setImage} />
      <div className='m-5'>
        <label className=''>Content</label>
        <Tooltip title="Use the provided features to format your text">
          <Info fontSize='small' />
        </Tooltip>
        <ToggleButtonGroup
          color="primary"
          exclusive
          value={mode}

          className='float-right'
          aria-label="Platform"
        >
          <ToggleButton onClick={(e) => modeChange(e)} value="edit">Edit</ToggleButton>
          <ToggleButton onClick={(e) => modeChange(e)} value="preview">Preview</ToggleButton>

        </ToggleButtonGroup>
        {(mode === 'edit') ?
          <ReactQuill className='my-10 h-96' defaultValue={content} modules={modules} onChange={setContent} theme="snow" placeholder="Content goes here..." />

          :
          <div id='blogContent' className='shadow-lg mt-10 flex  overflow-hidden border h-max font-lora p-4 pb-28 lg:pb-14 leading-loose box-shadow-lg w-full bg-white text-justify resize-none '>
            <div>
            <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} />
            </div>
          </div>
        }
      </div>


    </div>
  )
}

export default Draft