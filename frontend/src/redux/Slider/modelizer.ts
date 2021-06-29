import { ImageUnsplashApi, ImageSlider } from './types';

export const modelizeImageUnsplashApi = (imagesUnsplashApi: ImageUnsplashApi[]): ImageSlider[] => {
  return imagesUnsplashApi.map(imageUnsplashApi => ({
    id: imageUnsplashApi.id,
    altDescription: imageUnsplashApi.alt_description,
    url: imageUnsplashApi.urls.full,
  }));
};
