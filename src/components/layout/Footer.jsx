import './footer.scss';

function Footer() {
  const formatedDate = new Date().toLocaleString('lt-LT', {
    dateStyle: 'short',
  });
  return (
    <footer className="tac foot">
      <p>&copy; Copyright. All rights reserved </p>
      <p>{formatedDate}</p>
    </footer>
  );
}

export default Footer;
