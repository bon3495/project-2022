import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/constants/routes';
import { AuthLayout, DefaultLayout } from '~/components/Layouts';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ path, component: Page, defaultLayout }) => {
          const Wrapper = defaultLayout ? DefaultLayout : AuthLayout;
          return (
            <Route
              key={path}
              path={path}
              element={
                <Wrapper>
                  <Page />
                </Wrapper>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
