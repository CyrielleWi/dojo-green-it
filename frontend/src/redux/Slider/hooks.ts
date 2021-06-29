import { unsplashApiClient } from 'services/networking/client';
import { useDispatch } from 'react-redux';
import { updateImages } from './slice';
import { useTypedAsyncFn } from 'redux/useTypedAsyncFn';
import { AsyncFnReturn } from 'react-use/lib/useAsyncFn';
import { modelizeImageUnsplashApi } from './modelizer';
import { ImageUnsplashApi } from './types';
import { UNSPLASH_TRAVEL_IMAGES_API } from './constants';

export const useFetchImages = (): AsyncFnReturn<(
  ...args: {
    images: ImageUnsplashApi[];
  }[]
) => Promise<void>> => {
  const dispatch = useDispatch();

  return useTypedAsyncFn<{ images: ImageUnsplashApi[] }>(async () => {
    const images = await unsplashApiClient.get(UNSPLASH_TRAVEL_IMAGES_API);
    dispatch(updateImages(modelizeImageUnsplashApi(images.results)));
  }, [dispatch]);
};
