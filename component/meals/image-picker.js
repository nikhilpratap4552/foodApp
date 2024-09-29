'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({name, label}){

    const [pickedimg, setpickedimg] = useState();
    const imageInput =useRef();
    function handlePickClick(){
        imageInput.current.click();
    }
    function handleimgchange(event){
        const file = event.target.files[0];
        if(!file){
            setpickedimg(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            setpickedimg(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }
    return(
        <>
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedimg && <p>no picked image</p>}
                    {pickedimg && (<Image src={pickedimg} alt='the image selected' fill />)}
                </div>
                <input className={classes.input} type='file' id={name} accept='image/png, image/jpeg' name={name} ref={imageInput} required onChange={handleimgchange}/>
                <button className={classes.button} type='button' onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
        </>

    )
}