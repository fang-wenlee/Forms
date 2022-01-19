import "./styles.css";

import Test from "./components/forms/Test";
import Test1 from "./components/forms/Test1";
import ContactFormPage from "./pages/ContactFormPage";

export default function App() {
  return (
    <div className="App">
      <Test />
      <Test1 />
      <ContactFormPage />
    </div>
  );
}
