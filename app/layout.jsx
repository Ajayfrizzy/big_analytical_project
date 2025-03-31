export const metadata = {
  title: "Fusion Property",
  description: "Fusion Property is here for everyone",
  icons:{
    icon: "/asset/top_logo.png",
    alt: "Fusion Property Logo",
    width: 30,
    height: 30,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
