import { Box, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { BaseButton } from 'src/components/styled/button';

type FinishSectionProps = {
  onBackClicked: () => void;
  onStartGenerateClicked: () => void;
  loading?: boolean;
};

export default function FinishSection({
  onBackClicked,
  onStartGenerateClicked,
  loading,
}: FinishSectionProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  const renderLoading = (
    <>
      <Box width={200}>
        <span className="loader"> </span>
      </Box>
      <Box sx={{ mt: 1, textAlign: 'center' }}>
        <Typography variant="subtitle1">
          Your request is being processed, It might take some time.
        </Typography>
        <Typography variant="caption" color="text.secondary">
          But still faster than Windows update.
        </Typography>
      </Box>
    </>
  );

  const renderWeAreAlmostDone = (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3">We&apos;re almost done!</Typography>
        <Typography variant="caption" color="#A9B2BC">
          Click on start generation button to start building your awesome website, or click on back
          button to do some changes
        </Typography>
      </Box>
      <Box>
        <BaseButton sx={{ mr: 1 }} onClick={onBackClicked} variant="outlined" color="primary">
          Back
        </BaseButton>
        <BaseButton onClick={onStartGenerateClicked} variant="contained" color="primary">
          Start generation
        </BaseButton>
      </Box>
    </>
  );

  return (
    <Box sx={{ width: 1, height: 1 }}>
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 8, minHeight: '400px' }}
      >
        {loading ? renderLoading : renderWeAreAlmostDone}
      </Stack>
    </Box>
  );
}
