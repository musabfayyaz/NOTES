import "./globals.css";
import Background from './components/Background'



export const metadata = {
  title: "NOTES",
  description: "Simple Notes Keeping App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-hidden'>
   
       <Background/> 
       <div className="lock-page">
      {children}
      </div>
      </body>
    </html>
  );
}
