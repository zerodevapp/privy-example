import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PrivyProvider } from '@privy-io/react-auth';
import { ZeroDevProvider } from '@zerodevapp/privy';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ZeroDevProvider projectId='d00dbcef-2f10-479e-8c10-28a9fd95717d'>
      <PrivyProvider
        appId={process.env.REACT_APP_PRIVY_APP_ID!}
        onSuccess={(user) => console.log(`User ${user.id} logged in!`)}
      >
      <App />
      </PrivyProvider>
    </ZeroDevProvider>
  </React.StrictMode>
);
