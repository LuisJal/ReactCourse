export const fileUpload = async (file) => {
  if (!file) throw new Error("EL archivo no existe");
  const cloudUrl = "https://api.cloudinary.com/v1_1/dgpziviq3/upload";
  const formData = new FormData();

  formData.append("upload_preset", "React-Journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (!resp) throw new Error("No se subió la imagen");

    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
