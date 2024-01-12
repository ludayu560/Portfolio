import { AppShell } from '@mantine/core';
import MyFooter from './components/Footer';
import Header from './components/Header';
import MainPanel from './components/MainPanel';

const App = () => {
  return (
      <AppShell
        header={{height: '15vh'}}
        footer={{height: '20vh'}}
        >
        <AppShell.Header mx={'12vw'}>
          <Header />
        </AppShell.Header>
        <AppShell.Main mx={'10vw'}>
          <MainPanel />
        </AppShell.Main>

        <AppShell.Footer mx={'xl'}>
          <MyFooter />
        </AppShell.Footer>
      </AppShell>
  );
};

export default App;
