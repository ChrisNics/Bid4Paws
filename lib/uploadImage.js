export default async function uploadImage(file) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'm9sbo7js');

    const response = await fetch('https://api.cloudinary.com/v1_1/dn5bczfxc/image/upload', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
