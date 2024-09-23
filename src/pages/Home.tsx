import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <h1>Homoe Page</h1>
        <Link className="p-4 bg-slate-500 text-white rounded-lg" to="/chats"></Link>
    </div>
  )
}

export default Home