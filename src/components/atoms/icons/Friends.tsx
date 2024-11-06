import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import { IconProps } from 'src/types';

export const Friends: React.FC<IconProps> = ({ size = 30, fill }) => (
  <Svg width={size} height={size} viewBox="0 0 512.000000 512.000000">
    <G
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <Path
        fill={fill}
        d="M1480 4391 c-322 -71 -598 -302 -729 -611 -55 -130 -72 -211 -78
    -380 -4 -130 -2 -170 15 -250 48 -233 174 -450 342 -590 l62 -50 -39 -16
    c-202 -83 -376 -198 -537 -353 -249 -241 -412 -525 -492 -859 -34 -141 -31
    -258 8 -344 37 -80 107 -151 187 -191 l66 -32 1415 0 1415 0 66 32 c80 39 150
    111 187 191 24 51 27 68 27 167 0 83 -6 130 -23 192 -12 45 -22 87 -22 93 0 7
    246 10 758 10 l757 0 60 29 c167 80 231 245 176 458 -78 304 -234 555 -461
    744 -85 70 -242 170 -300 190 l-30 11 61 66 c158 169 232 360 231 597 -1 146
    -23 240 -86 370 -106 221 -303 384 -541 446 -96 25 -278 30 -370 10 -318 -70
    -569 -315 -645 -633 -23 -94 -27 -267 -9 -363 28 -153 127 -341 233 -444 l45
    -44 -75 -38 c-167 -85 -358 -246 -466 -391 l-50 -68 -42 26 c-22 14 -96 53
    -163 86 l-123 60 59 48 c151 127 270 318 327 525 32 113 43 312 24 436 -50
    348 -275 651 -594 800 -137 63 -218 81 -401 85 -129 3 -176 0 -245 -15z m399
    -312 c125 -33 224 -92 323 -190 75 -76 94 -101 137 -191 66 -137 85 -228 78
    -372 -13 -280 -163 -510 -412 -631 -198 -96 -406 -99 -600 -6 -210 100 -349
    272 -406 500 -30 120 -24 292 15 406 40 117 98 209 190 300 183 182 430 249
    675 184z m1971 -60 c36 -5 97 -26 137 -45 187 -89 304 -277 304 -485 0 -153
    -51 -279 -156 -384 -207 -207 -525 -207 -730 1 -102 102 -155 232 -155 379 0
    292 220 527 510 543 14 1 54 -3 90 -9z m129 -1404 c104 -22 239 -75 332 -131
    103 -62 250 -200 318 -299 65 -93 133 -236 160 -335 26 -94 27 -126 2 -140
    -14 -7 -273 -9 -797 -8 l-777 3 -51 86 c-64 106 -131 193 -218 284 l-66 70 44
    60 c163 218 411 374 659 414 39 6 81 13 95 15 46 8 226 -3 299 -19z m-2020
    -330 c422 -83 797 -368 995 -757 91 -180 154 -406 128 -463 -26 -57 34 -55
    -1382 -55 -1402 0 -1352 -2 -1380 51 -19 35 -5 127 39 259 175 522 601 887
    1136 975 112 18 346 13 464 -10z"
      />
    </G>
  </Svg>
);