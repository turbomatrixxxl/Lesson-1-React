import Container from './container';
import Menu from './Menu';

export const App = () => {
  const isVisible = true;
  const showHeading = true;
  const showMenu = true;

  function renderheading() {
    return <h1>Heading</h1>;
  }

  return (
    <>
      {showHeading && renderheading()}
      {console.log(isVisible)}
      {!isVisible ? 'Vizibil ' : 'Invizibil '}
      {isVisible && 'vizibil '}
      <Menu
        title="Meniul meu Personal"
        items={['item 1', 'item 2']}
        isVisible={showMenu}
      />

      <Container>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          <h1>Lesson 1 React and Jsx</h1>
        </div>
      </Container>
    </>
  );
};
