//Components
import { Boost } from 'components/Boost/Boost';
import { Footer } from 'components/Footer/Footer';
import { GetStarted } from 'components/GetStarted/GetStarted';
import { Header } from 'components/Header/Header';
import { Statistic } from 'components/Statistic/Statistic';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<GetStarted />
			<Statistic />
			<Boost />
			<Footer />
		</div>
	);
};

export default App;
