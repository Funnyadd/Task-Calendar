// These styles apply to every route in the application
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status/auth-status";
import { Suspense, useEffect } from "react";
import AccountIcon from "@/components/account-icon/account-icon";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  var user = null;
  var theme = "dark";
  const userSession = await getServerSession();

  if (userSession?.user?.email) {
    user = await prisma.user.findUnique({
      where: {
        email: userSession.user.email,
      },
    });
    if (user) {
      if (user.theme == "") {
        user.theme = "dark";
        
        await fetch(`/api/user/${user.email}`, {
          method: 'PUT',
        });

      }
      theme = user.theme;
    }
    else {
      console.error("404 - User not found")
    }
  }

  return (
    <html lang="en">
      <body id="mainBodyId" className={`${inter.variable} ${theme}`}>
        <Toaster />
        <Suspense fallback="Loading...">
          <AccountIcon user={user} />
          <AuthStatus />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;