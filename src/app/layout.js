import 'prismjs/themes/prism-okaidia.css'  // You already have this package installed!


export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
export const metadata = {
  title: 'CS 128 Legende',
  description: 'Introduction to Computer Science II UIUC',
  icons: {
    icon: '/favicon.ico',
  }
}
