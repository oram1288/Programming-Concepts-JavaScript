function Header(props) {
  // rather then writing props, you can just put in title and text
  return (
    <header>
      <div>
        <h1>Header Component</h1>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </header>
  );
}

export default Header;
