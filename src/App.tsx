import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
      <>
        <CssBaseline />
        <Navbar />
        <Container sx={{ mt: 4 }}>
          <AppRoutes />
        </Container>
      </>
  );
}

export default App;
