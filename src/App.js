import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaRecetas from "./components/ListaRecetas";

import CategoriaProvider from "./context/CategoriasContext";
import ModalProvider from "./context/ModalContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
  return (
    
    <CategoriaProvider>
      <RecetasProvider>
        <ModalProvider>
          
          <Header />

          <div className="container">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriaProvider >
   
   
  );
}

export default App;
