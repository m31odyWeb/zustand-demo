import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './components/layout/layout';
import { Router } from './router';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
