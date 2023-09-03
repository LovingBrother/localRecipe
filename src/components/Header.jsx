import jollofLogo from '../assets/jollof-rice.svg'

const Nav = () => {
  return (
    <header className="flex-row px-10 py-10 m-3 bg-green-500">
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={jollofLogo} className="logo Jollof" alt="Jollof logo" />
        </a>
      </div>
      <h3 className="text-gray-500 text-2xl font-mono italic font-extrabold">
        Jollof<span className="text-orange-400"> Rice</span>
      </h3>
    </header>
  );
};

export default Nav;