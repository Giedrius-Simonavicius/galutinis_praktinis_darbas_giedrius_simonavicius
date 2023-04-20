import './footer.scss';

function Footer() {
  const formatedDate = new Date().toLocaleString('lt-LT', {
    dateStyle: 'short',
  });
  return (
    <div className="tac cyanTheme foot">
      <p>&copy; copyright. All rights reserved {formatedDate}</p>
    </div>
  );
}

export default Footer;
