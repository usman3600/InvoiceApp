import Dashboard from "../components/Dashboard"
import ClientsSide from "../components/ClientsSide"
import StickyFooter from "../components/Footer"
import ClientAndRecentSection from "../components/ClientAndRecentSection"

const Home = () => {
  return (
    <div >
        <Dashboard/>
        <ClientAndRecentSection/>
        <StickyFooter/>
    </div>
  )
}

export default Home