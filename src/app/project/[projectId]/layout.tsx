'use client';

// auth
import { AuthGuard } from 'src/auth/guard';
// components
import ProjectLayout from 'src/layouts/project';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthGuard>
      <ProjectLayout>{children}</ProjectLayout>
    </AuthGuard>
  );
}
