import "./Header.css";

const Header = ({ title, leftChild, rigthChild }) => {
  return (
    <div className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_title">{title}</div>
      <div className="header_right">{rigthChild}</div>
    </div>
  );
};

export default Header;
