
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Write.css'


const Write = () => {
  const [editorHtml, setEditorHtml] = useState('');
console.log(editorHtml);
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      [{ 'align': [] }],
      ['clean'],
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'link', 'image', 'align',
  ];

  const handleEditorChange = (content) => {
    setEditorHtml(content);
  };


  

  return (
  <div className="write-add">
    <div className="write-content">
      <input className='write-input' type="write-text" placeholder='Title'/>
      <div className="write-container">
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
        placeholder="Start writing here..."/>
        </div>
        </div>
    <div className="write-menu">
      <div className="write-iteam">
        <h1>Publish</h1>
        <span>
          <b>Status:</b> Draft
        </span>
        <span>
          <b>Visibility:</b> Public
        </span>
        <input style={{display:'none'}} type="file" name='' id='file' />
        <label htmlFor="file" className='write-label'>Upload Image</label>
        <div className="write-btn">
          <button className='write-btn1'>Save as a Draft</button>
          <button className='write-btn2'>Update</button>
        </div>
      </div>
      <div className="write-iteam">
        <h1>Category</h1>
        <label htmlFor="Science">Science</label>
        <input type="radio" name='cat' 
        value='Science' id="Science" />
       
       <label htmlFor="Technology">Technology</label>

        <input type="radio" name='cat' 
        value='Technology' id="Technology" />
     

     <label htmlFor="Cinema">Cinema</label>
        <input type="radio" name='cat' 
        value='Cinema' id="Cinema" />
      
      <label htmlFor="Design">Design</label>

        <input type="radio" name='cat' 
        value='Design' id="Design" />
       
       <label htmlFor="Food">Food</label>
        <input type="radio" name='cat' 
        value='Food' id="Food" />
        
      </div>
    </div>
  </div>
  )
}

export default Write