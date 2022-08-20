import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/layouts/Header';
import UserInformation from '@/components/UserInformation';
import Footer from '@/layouts/Footer';

const App = () => {

  return (
    <ThemeProvider>
      <Header />
      <UserInformation/>
      <Footer />
    </ThemeProvider>
  );
};

export default App;