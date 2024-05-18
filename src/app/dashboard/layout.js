import AuthGaurd from "@/layouts/auth/auth-gaurd";
import DashboardLayout from "@/layouts/dashboard";

export default function RootLayout({ children }) {
  return (
    <AuthGaurd>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGaurd>
  );
}
