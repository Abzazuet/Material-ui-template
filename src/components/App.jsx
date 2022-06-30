import Button from "@mui/material/Button";
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'

function App() {
  return (
  <>
  <Button variant="contained" disableElevation color="success" size="small">Hello world</Button>
  <Button variant="text" color="secondary">Hello world</Button>
  <Button variant="outlined" color="error">Hello world</Button>
  <ThreeDRotation />
  </>
  );
}

export default App;
