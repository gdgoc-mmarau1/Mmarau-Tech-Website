import './globals.css'
import Nav from '../components/Nav'
import About_us from '../components/About_us'
<<<<<<< HEAD
import Footer from "@/components/Footer";
=======
>>>>>>> 3132aa6cc480241a9c09b842bb1bd7a23dbc1989
import Provider from '../components/Provider'

export const metadata = {
    title: 'GDGoC',
    description: 'The techie meet-Up',
}

const RootLayout = ({ children }) =>{
    return (
        <html lang='en' className='overflow-x-hidden'>
            <body>
               
                    <main className="app">
                        <Nav />
                        <About_us />
                        {children}
                    </main>
<<<<<<< HEAD

                    <footer>
                        <Footer />
                        {children}
                    </footer>
=======
>>>>>>> 3132aa6cc480241a9c09b842bb1bd7a23dbc1989
                
            </body>
        </html>
            
    )
}

export default RootLayout;