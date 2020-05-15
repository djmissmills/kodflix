import moonlight from './images/moonlight.jpg';
import southern from './images/rail.jpg';
import much from './images/much.jpg';
import joker from './images/joker.jpg';
import inherent from './images/inherent.jpg';
import underwater from './images/underwater.jpg';


export default function getGallery() {
    return [
        {id: 'moon', name: 'moonlight', logo: moonlight},
        {id: 'experience', name: 'Southern', logo: southern},
        {id: 'much', name: 'Much A Doo', logo: much},
        {id: 'joker', name: 'Joker', logo: joker},
        {id: 'inherent', name: 'Inherent', logo: inherent},
        {id: 'underwater', name: 'Underwater', logo: underwater}
      ];
}