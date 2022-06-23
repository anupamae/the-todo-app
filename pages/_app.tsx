import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import store from '../State/Store';
import PageTemplate from '../Components/PageTemplate';

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </Provider>
  )
}

export default App
