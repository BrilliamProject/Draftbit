import { Platform } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import assetToBase64 from './assetToBase64';

const selectFile = async ({ returnNameAndValue = false, multiple = false }) => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      multiple,
    });

    if (result.canceled) {
      console.error('Select file canceled');
      return;
    }

    const assets = result.assets;

    if (!assets || assets.length === 0) {
      console.error('No assets were returned in select file');
      return;
    }

    const processAsset = async asset => {
      const value = await assetToBase64(asset);
      return returnNameAndValue ? { name: asset.name, value } : value;
    };

    if (multiple) {
      const processedAssets = await Promise.all(assets.map(processAsset));
      return processedAssets;
    } else {
      return processAsset(assets[0]);
    }
  } catch (error) {
    console.error('Error in selectFile:', error);
  }
};

export default selectFile;
