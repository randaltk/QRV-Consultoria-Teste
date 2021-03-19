import Table from "../components/Table/Table";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Table />
      <div style={{ backgroundColor: "transparent", height: "30rem" }}></div>
      <Footer />
    </>
  );
}

export default App;
