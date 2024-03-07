import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';

export const useAvatar = () => {
  const [imageUrl, setImageUrl] = useState<string | any>(null);
  const [image, setImage] = useState<null | string>(null);

  const selectImage = async () => {
    try {
      const response = await launchImageLibrary({mediaType: 'photo'});

      if (response.assets?.length) {
        const imageUri = response.assets[0].uri;
        setImageUrl(imageUri);
        if (imageUrl !== '') {
          updateProfilePhoto(imageUrl);
        }
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const updateProfilePhoto = async (image: string) => {
    const user = auth().currentUser;
    console.log(image, 'image');

    if (user) {
      try {
        await user.updateProfile({
          photoURL: image,
        });

        setImage(user.photoURL);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {selectImage, image};
};
