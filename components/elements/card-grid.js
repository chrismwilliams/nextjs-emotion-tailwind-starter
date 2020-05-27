import Card from "./card";
import StyledCardGrid from "./styled/card-grid";

const tempCardData = {
  type: ["blog", "tech", "case study", "learning"],
  title: [
    "Vitae tempus quam pellentesque nec",
    "Et malesuada fames ac turpis egestas integer",
    "Augue lacus viverra vitae congue",
    "Dui sapien eget mi proin sed",
    "Gravida rutrum quisque non tellus orci ac auctor",
  ],
  lorem: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc vel risus commodo viverra.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh venenatis cras. Mauris pellentesque.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Et malesuada fames ac turpis egestas.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem viverra aliquet eget sit amet tellus cras.",
  ],
  getRandomType: function () {
    return this.type[Math.floor(Math.random() * this.type.length)];
  },
};

export default function CardGrid() {
  return (
    <StyledCardGrid>
      <h2>Example Project Cards</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipiscing elit. Ipsa libero
        labore natus atque, ducimus sed.
      </p>
      <div className="cards">
        {tempCardData.title.map((title, i) => (
          <Card key={title} title={`Project ${i + 1}`}>
            <img
              src={`/images/pugs/pug-${i + 1}.jpg`}
              alt="Picture of a Pug dog"
            />
            <div className="card-content">
              <span className="type">{tempCardData.getRandomType()}</span>
              <h3>{title}</h3>
              <p>{tempCardData.lorem[i]}</p>
            </div>
          </Card>
        ))}
      </div>
    </StyledCardGrid>
  );
}
