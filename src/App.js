import './App.scss';

import { useEffect, useState } from 'react';

import Loading from './pages/Loading/Loading'
import Header from './pages/components/Header/Header';
import Home from './pages/Home/Home';
import SideNav from './pages/components/SideNav/SideNav';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Skills from './pages/Skills/Skills'
import Experience from './pages/Experience/Experience';

function App() {

	const [loaded, setLoaded] = useState(false);

	// const animateList = ['fadeUp', 'fadeIn']
	// const selectAnimation = (classList) => {
	// 	for (let i = 0; i < animateList.length; i++) {
	// 		if (classList.contains(animateList[i]))
	// 			return animateList[i]
	// 	}
	// 	return animateList[0]
	// }

	useEffect(() => {
		let observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.classList.contains('animate')) {
							entry.target.classList.add('animateDone');
						}
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.1,
			}
		);

		document.querySelectorAll('div').forEach((div) => {
			observer.observe(div);
		});
	});

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 100);
	});

	return !loaded ? (
		<Loading />
	) : (
		<>
			<SideNav />
			<Header />
			<Home />
			<About />
			<Education />
			<Skills />
			<Experience />
		</>
	);
}

export default App;
