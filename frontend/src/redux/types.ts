import { AvatarState } from './Avatar';
import { SliderState } from './Slider';

export type RootState = Readonly<{
  avatar: AvatarState;
  slider: SliderState;
}>;
