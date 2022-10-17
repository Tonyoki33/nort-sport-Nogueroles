import ItemListContainer from "../ItemListContainer";
import "../styles/main.css";
import "../services/itemsServer";

export const Home = () => {
  return (
    <div>
      <ItemListContainer />
    </div>
  );
};
