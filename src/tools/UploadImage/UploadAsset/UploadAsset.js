import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import React, { } from "react";
import Asset from "../../../components/Sections/Sample/UpdateSample/upload.jpeg"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import "./UploadAsset.css";
const UploadAsset = (props) => {

  return (
    <div className="edit-asset-item">
      {props.removeIcon !== false ? <RemoveCircleOutlineIcon onClick={props.removeIcon} /> : null}
      <img src={props.src} alt="" />
      <div>
        <div className="edit-img-profile mt-1">
          <input
            type="file"
            className="custom-file-input"
            onChange={props.Change}
            multiple
            accept={props.accept}
          />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCameraIcon />
          </IconButton>
        </div>
      </div>

      <p>{props.title}</p>
    </div>
  );
}


export default UploadAsset;
