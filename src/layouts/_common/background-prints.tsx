// @mui
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

export default function BackgroundPrints({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        bottom: 0,
        width: 88,
        height: 65,
        ...sx,
      }}
      {...other}
    >
      <path
        opacity="0.4"
        d="M111.718 74.3685C108.728 63.1821 97.2593 51.6834 86.102 48.6856L16.5421 29.9957C5.38477 26.9979 -1.23613 33.636 1.75392 44.8224L20.3952 114.564C23.3853 125.75 34.854 137.249 46.0113 140.246L115.571 158.936C126.729 161.934 133.349 155.296 130.359 144.11L111.718 74.3685Z"
        fill="#3569BD"
      />
      <path
        d="M139.604 46.4091C136.614 35.2227 125.146 23.7241 113.988 20.7262L44.4283 2.03632C33.2709 -0.961512 26.65 5.67663 29.6401 16.863L48.2814 86.6042C51.2715 97.7906 62.7402 109.289 73.8975 112.287L143.457 130.977C154.615 133.975 161.236 127.337 158.246 116.15L139.604 46.4091Z"
        fill="#3569BD"
      />
    </Box>
  );
}
