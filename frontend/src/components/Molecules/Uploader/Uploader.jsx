// import { useState } from "react";
import Button from "@components/Atoms/Button/Button";

const Uploader = (props) => {
  const { selectedImages, setSelectedImages } = props;
  // const [image, setImage] = useState(null);
  // const [fileName, setFileName] = useState("");

  // const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (e) => {
    const selectedFile = e.target.files;
    const selectedFileArray = Array.from(selectedFile);

    const image = selectedFileArray.map((file) => {
      // return URL.createObjectURL(file);
      return file;
    });

    setSelectedImages((prev) => prev.concat(image));
    // console.log(imagesArray);
  };

  // console.log(selectedImages);

  return (
    <>
      <div className="flex justify-between">
        <h5 className="font-medium text-night_30">Image Upload</h5>
      </div>

      <input
        hidden
        type="file"
        name="image"
        accept="image/*"
        multiple
        onChange={onSelectFile}
        className="input-image"
      />

      {selectedImages.length === 0 ? (
        <div
          onClick={() => document.querySelector(".input-image").click()}
          className="mt-7 h-10 lg:h-80 flex flex-col justify-center items-center border-2 border-[#E1E2E9] bg-main_background rounded-lg cursor-pointer"
        >
          <h6 className="text-primary_100 font-medium">Upload Image</h6>
          <p className="hidden lg:block text-night_30 text-sm mt-2">
            Upload an image for your product
          </p>
          <p className="hidden lg:block text-night_30 text-xs">
            File format <span className="text-night_90">jpg, jpeg, png</span>
          </p>
        </div>
      ) : (
        <>
          <div
            onClick={() => document.querySelector(".input-image").click()}
            className="h-10 mt-7 flex flex-col justify-center items-center border-2 border-[#E1E2E9] bg-main_background rounded-lg cursor-pointer"
          >
            <p className="text-primary_100 font-medium">Upload Image</p>
          </div>

          <div className="flex flex-col gap-3 mt-3 max-h-80 overflow-y-auto">
            {selectedImages.map((image, index) => (
              <div
                key={index}
                className="flex justify-between border-2 border-[#E1E2E9] rounded-lg bg-main_background"
              >
                <img
                  src={image}
                  // alt={fileName}
                  className="rounded-l-md w-[100px] h-[100px] object-cover"
                />
                <div className="flex flex-col p-1">
                  <div className="flex-1 text-right">
                    <p>Nama</p>
                    <p>Ukuran</p>
                  </div>
                  <Button
                    type="button"
                    variant="delete"
                    size="xs"
                    onClick={() =>
                      setSelectedImages(
                        selectedImages.filter((e) => e !== image)
                      )
                    }
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Uploader;

{
  /* <div
        onClick={() => document.querySelector(".input-image").click()}
        className="flex flex-col justify-center items-center mt-7 border-2 h-32 border-[#E1E2E9] bg-main_background rounded-lg cursor-pointer"
      >
        <input
          hidden
          type="file"
          accept="image/*"
          name="image"
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
          className="input-image"
        />
        <p>Browse Image to Upload</p>
      </div> */
}
