"use client";
import { Inter } from "next/font/google";
import Head from "next/head";

import { store } from "../redux/store";
import { Provider } from "react-redux";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'SocialFly',
  description: 'App for the social Butterflies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
