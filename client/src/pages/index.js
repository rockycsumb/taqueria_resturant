import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Home = () =>{
	const [isOpen, setIsOpen] = useState(false);
	
	const toggle = () => {
		setIsOpen(!isOpen);
		console.log("open")
	}
	
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
		</>
	)
}

export default Home;