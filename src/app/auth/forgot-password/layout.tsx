'use client';

// auth
import { GuestGuard } from 'src/auth/guard';
import AuthSecurityLayout from 'src/layouts/auth/security';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <GuestGuard>
      <AuthSecurityLayout>{children}</AuthSecurityLayout>
    </GuestGuard>
  );
}
