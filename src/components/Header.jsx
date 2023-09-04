import jollofLogo from "../assets/jollof-rice.svg";

const Nav = () => {
  return (
    <div className="flex bg-green-500 items-center w-full justify-center">
        <div className="flex-auto w-1/4">
          <a
            href="https://local-recipe-lovingbrother.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={jollofLogo} className="logo Jollof" alt="Jollof logo" />
          </a>
        </div>
        <div className="flex-auto w-3/4">
          <h1 className="text-white w-2/3 font-mono text-5xl text-center font-extrabold">
            African Party Jollof
          </h1>
        </div>
    </div>
  );
};

export default Nav;
