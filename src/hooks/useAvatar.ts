import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const useAvatar = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const selectImage = async () => {
    try {
      const response = await launchImageLibrary({mediaType: 'photo'});

      if (response.assets?.length) {
        const imageUri = response.assets[0].uri as string;

        if (imageUri !== null) {
          updateProfilePhoto(imageUri);
        }
      }
    } catch (error) {
      Alert.alert('', error as string);
    }
  };

  const updateProfilePhoto = async (image: string) => {
    const user = auth().currentUser;

    if (user) {
      try {
        await user.updateProfile({
          photoURL: image,
        });

        await firestore().collection('users').doc(user?.uid).update({
          photo: image,
        });

        setImageUrl(image);
      } catch (error) {
        Alert.alert('', error as string);
      }
    }
  };

  return {selectImage, imageUrl};
};
