import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@mui/material";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from './components/MainLayout';

import MainPage from "./routes/MainPage";
import DojoPage from "./routes/DojoPage";
import LorePage from "./routes/LorePage";
import GalleryPage from "./routes/GalleryPage";
import RoadPage from "./routes/RoadPage";
import StorePage from "./routes/StorePage";


const theme = createTheme({
    palette: {
        primary: {
            light: '#946077',
            main: '#66354e',
            dark: '#663754',
            contrastText: '#ff0000'
        },
        secondary: {
            main: '#fff'
        }

    },
});


const withLayout = (Component: any) => (props :any) => (
    <MainLayout>
        <Component {...props} />
    </MainLayout>
);

const Main = withLayout(() => <MainPage />)
const Dojo = withLayout(() => <DojoPage />)
const Lore = withLayout(() => <LorePage />)
const Gallery = withLayout(() => <GalleryPage />)
const Road = withLayout(() => <RoadPage />)
const Store = withLayout(() => <StorePage />)

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Main />}  />
                  <Route path="/lore" element={<Lore />}  />
                  <Route path="/gallery" element={<Gallery />}  />
                  <Route path="/dojo" element={<Dojo />}  />
                  <Route path="/roadmap" element={<Road />}  />
                  <Route path="/store" element={<Store />}  />
                           </Routes>
          </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
