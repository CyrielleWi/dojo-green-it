import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageSlider } from './types';

export type SliderState = Readonly<{
  images: ImageSlider[];
}>;

const initialState: SliderState = {
  images: [],
};

const sliderSlice = createSlice({
  name: 'Slider',
  initialState,
  reducers: {
    updateImages: (state, action: PayloadAction<ImageSlider[]>) => {
      state.images = action.payload;
    },
  },
});

export const { updateImages } = sliderSlice.actions;
export default sliderSlice.reducer;
