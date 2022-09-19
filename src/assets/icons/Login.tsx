import * as React from 'react';
import {G, Path, Svg} from 'react-native-svg';

function Login(props: React.SVGProps<SVGSVGElement>) {
  const {width = 24, height = 24, color = '#130F26', fill = 'none'} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={fill}>
      <G id="Iconly/Light/Login">
        <G id="Login">
          <Path
            id="Stroke 1"
            d="M15.8125 12.0217H3.77148"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            id="Stroke 3"
            d="M12.8848 9.10571L15.8128 12.0217L12.8848 14.9377"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            id="Stroke 4"
            d="M8.50439 7.38897V6.45597C8.50439 4.42097 10.1534 2.77197 12.1894 2.77197H17.0734C19.1034 2.77197 20.7484 4.41697 20.7484 6.44697V17.587C20.7484 19.622 19.0984 21.272 17.0634 21.272H12.1784C10.1494 21.272 8.50439 19.626 8.50439 17.597V16.655"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
      </G>
    </Svg>
  );
}
export default Login;
