import { Link } from "react-router-dom";
import { PiVirus } from "react-icons/pi";

const Header = () => {
  return (
	<header className="border-b border-gray-500/70 bg-blue-900 text-white">
		<div className="container flex items-center justify-between">

			<Link to="/" className="flex gap-3 items-center">
			<PiVirus className="text-4xl text-pink-600"/>
			<span className="font-semibold text-xl">Covid-19</span>
			</Link>

			<nav className="flex gap-4">
				<Link>Homepage</Link>
				<Link>Results</Link>
				<Link>About</Link>
				<Link>Contact Us</Link>
			</nav>

		</div>
	</header>
  )
}

export default Header;
