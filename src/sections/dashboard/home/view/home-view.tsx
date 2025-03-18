'use client';

import { Container, Stack, Typography } from '@mui/material';
import { useAuthContext } from 'src/auth/hooks';
import { useSettingsContext } from 'src/components/settings';
import { useHomeView } from '../hooks/use-home-view';
import ProjectsList from '../projects-list';

export default function HomeView() {
  const settings = useSettingsContext();

  const {
    // projectsCount,
    projects,
    isProjectLoading,
    handleDeleteProject,
  } = useHomeView();
  const { user } = useAuthContext();
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Stack spacing={1} sx={{ mb: { xs: 3, md: 5 } }}>
        <Stack spacing={2}>
          <Typography sx={{ textAlign: 'center' }} variant="h3" color="common.black">
            Hi, Welcome back {user?.name}
          </Typography>
        </Stack>
      </Stack>
      <ProjectsList
        isLoading={isProjectLoading}
        projects={projects}
        sx={{ mt: 5 }}
        onDeleteSuccess={handleDeleteProject}
      />
    </Container>
  );
}
