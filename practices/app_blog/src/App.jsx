import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Post from './components/Post';
import Error404 from './components/Error404';

function App() {
	return (
		<BrowserRouter>
			<MainContainer>
				<Header />
				<Main>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/blog'
							element={<Blog />}
						/>
						<Route
							path='/post/:id'
							element={<Post />}
						/>
						<Route
							path='/about'
							element={<About />}
						/>
						<Route
							path='*'
							element={<Error404 />}
						/>
					</Routes>
				</Main>
			</MainContainer>
		</BrowserRouter>
	);
}

const MainContainer = styled.div`
	padding: 40px;
	width: 90%;
	max-width: 700px;
`;

const Main = styled.main`
	background-color: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0 0 5px rgba(129, 129, 129, 0.1);
`;

export default App;
