import { SectionStyled } from "./style";

const Card = ({ item }: any) => (
  <SectionStyled>
    <svg
      width="53"
      height="53"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={item.path}
        fill="#0007AE"
      />
    </svg>
    <h3>{item.title}</h3>
    <p>{item.sub_title}</p>
  </SectionStyled>
);

export { Card };
