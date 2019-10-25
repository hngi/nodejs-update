import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./Upload.css";
import { connect } from "react-redux";
import { uploadFile } from "../../actions/upload";
import { setAlert } from "../../actions/alert";
import UploadSuccess from "../UploadSuccess/UploadSuccess";

const Upload = ({ uploadFile, setAlert }) => {
  const [formData, setFormData] = useState({
    file: "",
    show: false,
    loader: true
  });
  const { file, show } = formData;

  const upload = () => {
    if (file === "" || file === undefined || file === null) {
      setAlert("Please select a file to upload", "danger");
      setFormData({ show: false });
    } else if (file.size >= 50000000) {
      setFormData({ show: false });
      setAlert("Please select a file that is less than 50MB", "danger");
    } else if (
      file.name.match(
        /.(jpeg|jpg|png|gif|mp4|mp3|fig|doc|docx|pdf|xlsx|avi|flv|mkv|xml|exe)$/
      )
    ) {
      setFormData({ show: true });
      uploadFile(file);
    } else {
      setFormData({ show: false });
      setAlert(
        "Only .mp4 .mp3 .avi .flv .mkv .png .jpg .jpeg .doc .docx .pdf .gif .xml .exe files are supported",
        "danger"
      );
    }
  };
  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name !== "file" ? e.target.value : e.target.files[0]
    });
  };

  const onDrop = useCallback(File => {
    setFormData({ file: File[0] });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <main className="wrapper home-section d-flex justify-content-between align-items-center">
      <div className="left-section">
        <h1 className="left-section-title">
          The most seamless
          <br />
          file transfer experience
        </h1>
        <h4 className="left-section-content">
          Fast, Safe and Secure.... <br />
          Simply upload a file and share it via email or a generated link{" "}
        </h4>
        <img
          className="left-section-image"
          src="https://res.cloudinary.com/busola/image/upload/v1571806133/icon.png"
          alt=""
        />
      </div>
      <div className="right-section d-flex justify-content-center align-items-center">
        {!show ? (
          <div
            {...getRootProps()}
            className="d-flex flex-column align-items-center"
            style={{ outline: "none" }}
          >
            <label
              htmlFor="upload"
              className="right-section-upload d-flex flex-column justify-content-center align-items-center"
            >
              {isDragActive ? (
                <div
                  style={{ background: "rgba(38,128,235,0.5)" }}
                  {...getRootProps()}
                  className="d-flex flex-column align-items-center"
                >
                  <label
                    htmlFor="upload"
                    className="right-section-upload d-flex flex-column justify-content-center align-items-center"
                  >
                    <p style={{ color: "rgba(0,0,0,0.4)" }}>
                      Drop the file here...
                    </p>
                  </label>
                </div>
              ) : (
                <>
                  {" "}
                  <img
                    src="https://res.cloudinary.com/busola/image/upload/v1571806132/add.png"
                    alt=""
                  />
                  <p className="right-section-title mt-2">
                    Drag and drop or click to add a file
                  </p>
                  <h6 className="right-section-content">
                    {file ? file.name : null}
                  </h6>
                  <br />
                  <p className="right-section-content pl-4 pr-4">
                    {""} ( max file size: 50MB | .mp4 .mp3 .avi .flv .mkv .png
                    .jpg .jpeg .doc .docx .pdf .gif .xml .exe files are
                    supported)
                  </p>
                </>
              )}
            </label>
            <input
              {...getInputProps}
              type="file"
              name="file"
              onChange={e => onChange(e)}
              className="input-file"
              id="upload"
            />
            <button className="upload-btn mt-4" onClick={upload}>
              Upload
            </button>
          </div>
        ) : (
          <UploadSuccess />
        )}
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  uploadstate: state.upload
});
export default connect(
  mapStateToProps,
  { uploadFile, setAlert }
)(Upload);
