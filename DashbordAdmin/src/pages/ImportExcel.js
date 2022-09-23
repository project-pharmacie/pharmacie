import ReactFileReader from 'react-file-reader';
import React, { useState } from 'react';






const ImportExcel =() => {
    
    const handleFiles = (files) => {
        console.log(files.base64)
      }
return (


   
     <ReactFileReader fileTypes={[".csv",".zip"]} base64={true} multipleFiles={true} handleFiles={handleFiles}>
            <button className='btn'>Upload</button>
     </ReactFileReader>


);
}

export default ImportExcel ;
