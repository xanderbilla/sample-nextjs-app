
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '../custom-ui/EmblaCarousel';

export default function Carousel() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="flex flex-col gap-8">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
