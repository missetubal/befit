import * as React from 'react';
import {G, Path, Svg} from 'react-native-svg';

function ArrowRight2(props: React.SVGProps<SVGSVGElement>) {
  const {width = 18, height = 18, color = '#130F26', fill = 'none'} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={fill}>
      <Path
        d="M8.5 5L15.5 12L8.5 19"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default ArrowRight2;
