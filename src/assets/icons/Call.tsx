import * as React from 'react';
import {G, Path, Svg} from 'react-native-svg';

function Call(props: React.SVGProps<SVGSVGElement>) {
  const {width = 18, height = 18, color = '#130F26', fill = 'none'} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={fill}>
      <G id="Iconly/Light/Call">
        <G id="Call">
          <Path
            id="Stroke 1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
    </Svg>
  );
}

export default Call;
