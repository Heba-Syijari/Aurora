// @mui
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Stack, { StackProps } from '@mui/material/Stack';
import { alpha, styled, useTheme } from '@mui/material/styles';
//
import { IconifyProps } from '../iconify';
//
import { LeftIcon, RightIcon } from './arrow-icons';

// ----------------------------------------------------------------------

interface StyledIconButtonProps extends IconButtonProps {
  filled?: boolean;
  shape?: 'circular' | 'rounded';
  hasChild?: boolean;
}

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'filled' && prop !== 'hasChild' && prop !== 'shape',
})<StyledIconButtonProps>(({ filled, shape, hasChild, theme }) => ({
  color: 'inherit',
  transition: theme.transitions.create('all', {
    duration: theme.transitions.duration.shorter,
  }),
  ...(shape === 'rounded' && {
    borderRadius: theme.shape.borderRadius * 1.5,
  }),
  ...(!filled && {
    opacity: 0.48,
    '&:hover': {
      opacity: 1,
    },
  }),
  ...(filled && {
    color: alpha(theme.palette.common.white, 0.8),
    backgroundColor: alpha(theme.palette.grey[900], 0.48),
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[900],
    },
  }),
  ...(hasChild && {
    zIndex: 9,
    bottom: '0%',
    position: 'absolute',
    // marginTop: theme.spacing(-2.5),
    // marginBottom: theme.spacing(-2.5),
  }),
}));

// ----------------------------------------------------------------------

interface Props extends StackProps {
  shape?: 'circular' | 'rounded';
  filled?: boolean;
  children?: React.ReactNode;
  icon?: IconifyProps; // Right icon
  onNext?: VoidFunction;
  onPrev?: VoidFunction;
  leftButtonProps?: IconButtonProps;
  rightButtonProps?: IconButtonProps;
}

export default function CarouselBottomArrows({
  shape = 'circular',
  filled = false,
  icon,
  onNext,
  onPrev,
  children,
  leftButtonProps,
  rightButtonProps,
  sx,
  ...other
}: Props) {
  const theme = useTheme();

  const isRTL = theme.direction === 'rtl';

  const hasChild = !!children;

  if (hasChild) {
    return (
      <Stack sx={sx} {...other} padding={3.5}>
        {onNext && (
          <StyledIconButton
            filled={filled}
            shape={shape}
            hasChild={!!children}
            onClick={onPrev}
            {...leftButtonProps}
            sx={{
              left: { xs: '35%', sm: '40%', md: '40%', lg: '46%' },
              ...leftButtonProps?.sx,
            }}
          >
            <LeftIcon icon={icon} isRTL={isRTL} />
          </StyledIconButton>
        )}

        {children}

        {onPrev && (
          <StyledIconButton
            filled={filled}
            shape={shape}
            hasChild={!!children}
            onClick={onNext}
            {...rightButtonProps}
            sx={{
              right: { xs: '35%', sm: '40%', md: '40%', lg: '46%' },
              ...rightButtonProps?.sx,
            }}
          >
            <RightIcon icon={icon} isRTL={isRTL} />
          </StyledIconButton>
        )}
      </Stack>
    );
  }

  return (
    <Stack direction="row" alignItems="center" display="inline-flex" sx={sx} {...other}>
      <StyledIconButton filled={filled} shape={shape} onClick={onPrev} {...leftButtonProps}>
        <LeftIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>

      <StyledIconButton filled={filled} shape={shape} onClick={onNext} {...rightButtonProps}>
        <RightIcon icon={icon} isRTL={isRTL} />
      </StyledIconButton>
    </Stack>
  );
}
