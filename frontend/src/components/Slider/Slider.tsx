import React, { useEffect } from 'react';
import { StyledSlider, SliderImage } from './Slider.style';
import { useFetchImages } from 'redux/Slider/hooks';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useSelector from 'redux/useSelector';
import Loader from 'components/Loader';

const Slider: React.FC = () => {
  const [{ loading, error }, doFetchImages] = useFetchImages();
  useEffect(() => {
    doFetchImages();
  }, []);
  const images = useSelector(state => state.slider.images);

  return (
    <StyledSlider>
      {images.length ? (
        <AliceCarousel autoPlay autoPlayInterval={3000}>
          {images.map(image => (
            <SliderImage src={image.url} key={image.id} alt={image.altDescription} />
          ))}
        </AliceCarousel>
      ) : (
        <Loader />
      )}
    </StyledSlider>
  );
};

export default Slider;
