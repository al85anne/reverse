// import Image from 'next/image'
import './css/style.css'
// import BackgroundImage from "@/public/images/530efd57b51a720521734c8131bce85e.jpeg"
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`relative font-inter  tracking-tight`}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
