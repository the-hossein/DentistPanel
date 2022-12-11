import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../../../tools/loader/Loader';
import UploadAsset from '../../../../tools/UploadImage/UploadAsset/UploadAsset';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { CallApi } from '../../../../tools/CallApi/CallApi';
import { BaseUrl, CreateSampleRequest, UploadFileRequest } from '../../../../tools/Url';
import Asset from "./upload.jpeg";
const AddSample = () => {
    const [preload, setpreload] = useState(false);
    const [Sample, setSample] = useState();
    const [sampleId, setsampleId] = useState();
    const [sampleTitle, setsampleTitle] = useState("");
    const [sampleTitleEn, setsampleTitleEn] = useState("");
    const [sampleDesc, setsampleDesc] = useState("");
    const [sampleDescEn, setsampleDescEn] = useState("");
    const [Imagesid, setImagesid] = useState([0, 0, 0, 0]);
    const [Images, setImages] = useState([Asset, Asset, Asset, Asset]);
    const ChangeImage = async (e, id, index) => {
      setpreload(true);
      var myHeaders = new Headers();
      /*  myHeaders.append("Content-Type", "application/json"); */
  
      var formdata = new FormData();
      formdata.append("File", e.target.files[0], e.target.files[0].name);
  
      try {
        const result = await CallApi(
          BaseUrl + UploadFileRequest,
          formdata,
          myHeaders,
          "POST"
        );
        /* console.log(result) */
        if (result[1] === 200) {
          console.log(index);
          Imagesid[index] = result[0].data.id;
          setImagesid(Imagesid);
          console.log(Imagesid);
          console.log(result[0].data);
          /*     element.src=result[0].data.filePath; */
          Images[index] = result[0].data.filePath;
          setpreload(false);
          setImages(Images);
          toast.success("عکس با موفقیت ثبت شد", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          setpreload(false);
          toast.error("خطا در آپلود عکس", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch {
        setpreload(false);
        toast.error("خطا در آپلود عکس", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };
    const AddSample = async () => {
        setpreload(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log(Imagesid);
        var raw = JSON.stringify({
        
          title: sampleTitle,
          titleen: sampleTitleEn,
          description: sampleDesc,
          descriptionen: sampleDescEn,
          image1: Imagesid[0],
          image2: Imagesid[1],
          image3: Imagesid[2],
          image4: Imagesid[3],
        });
        const result = await CallApi(
          BaseUrl + CreateSampleRequest,
          raw,
          myHeaders,
          "POST"
        );
        console.log(result);
        if (result[1] === 200) {
          /*    dispatch(Success(result[0].data)); */
          setpreload(false);
          toast.success("با موفقیت ثبت شد", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("خطا در انجام عملیات", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      };
    
    return (
        <>
          {preload === true ? (
            <Loader />
          ) : (
            <>
              <div className="flex-center center-row rtl">
                <UploadAsset
                  src={Images[0]}
                  title="عکس اصلی"
                  accept="image/*"
                  id="PrimaryImage"
                  Change={(e) => ChangeImage(e, "PrimaryImage", 0)}
                />
              </div>
              <div className="flex-center center-row rtl">
                <UploadAsset
                  src={Images[1]}
                  title="عکس اول"
                  accept="image/*"
                  id="Image1"
                  Change={(e) => ChangeImage(e, "Image1", 1)}
                />
                <UploadAsset
                  src={Images[2]}
                  title="عکس دوم"
                  accept="image/*"
                  id="Image2"
                  Change={(e) => ChangeImage(e, "Image2", 2)}
                />
                <UploadAsset
                  src={Images[3]}
                  title="عکس سوم"
                  accept="image/*"
                  id="Image3"
                  Change={(e) => ChangeImage(e, "Image3", 3)}
                />
              </div>
    
              <div className="row-fields center-row">
                <TextField
                  value={sampleTitle}
                  required
                  label="عنوان  "
                  onChange={(e) => setsampleTitle(e.target.value)}
                />
                <TextField
                  value={sampleTitleEn}
                  required
                  label="عنوان انگلیسی  "
                  onChange={(e) => setsampleTitleEn(e.target.value)}
                />
              </div>
    
              <div className="row-fields center-row">
                <TextareaAutosize
                  value={sampleDesc}
                  labelId="Description"
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="توضیحات"
                  style={{ width: 480 }}
                  onChange={(e) => setsampleDesc(e.target.value)}
                />
                <TextareaAutosize
                  value={sampleDescEn}
                  labelId="DescriptionEn"
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="توضیحات انگلیسی"
                  style={{ width: 480 }}
                  onChange={(e) => setsampleDescEn(e.target.value)}
                />
              </div>
              <div className="row-fields"></div>
              <div className="row-fields">
                <a onClick={AddSample} className="primary-btn">
                 ثبت
                </a>
              </div>
              <ToastContainer />
            </>
          )}
        </>
      );
}

export default AddSample