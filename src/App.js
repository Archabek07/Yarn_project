import "./app.scss";

import {
  Logo,
  HeaderCart,
  SimpleButton,
  Categories,
  Sort,
  BookBlock,
} from "./Components";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <Logo />
          <SimpleButton />
          <SimpleButton>Another Btn</SimpleButton>
          <HeaderCart className={"button--cart"} />
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              onClick={(itemName) => console.log(itemName)}
              items={["Сказки", "Мальчикам", "Девочкам", "Энциклопедии"]}
            />
            <Sort items={["популярности", "цене", "алфавиту"]} />
          </div>
          <h2 className="content__title">Все книги</h2>
          <div className="content__items">
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
            <BookBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
