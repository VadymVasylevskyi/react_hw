
import { LanguageProvider } from "./HW-7/LanguageContext";
import MainComponent from "./HW-7/MainComponent";

function MainApp() {
  return (
  <>
  <LanguageProvider>
      <MainComponent />
    </LanguageProvider>
  </>
  )
}

export default MainApp;
