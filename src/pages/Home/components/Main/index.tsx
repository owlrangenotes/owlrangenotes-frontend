import { MainStyled } from "./style";
import { cards, nav } from "../../../../assets/mocks";
import { FiUser } from "react-icons/fi";
import { Card } from "./components/Card";

const Main = () => {
  return (
    <MainStyled>
      <section className="navigation-bar">
        <figure>
          <FiUser />
          <figcaption>
            Jamile <span>Assinatura gratuíta</span>
          </figcaption>
        </figure>
        <ul>
          {nav.map((item: any, i: number) => (
            <li key={i}>{item.name}</li>
          ))}
        </ul>
      </section>
      <section className="dashboard">
        <div className="what-a-make">
          <h2>O que você deseja fazer?</h2>
          <div className="content">
            {cards.map((item: any, i: number) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>
        <div className="what-a-progress">

        </div>
      </section>
    </MainStyled>
  );
};

export { Main };
