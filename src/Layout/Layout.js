import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./Layout.scss"

function Layout({children}) {
    
return(
    <>
    <Header/>
    <main className="main">
        {children}
    </main>
    <Footer/>
    </>
)
}

export default Layout;