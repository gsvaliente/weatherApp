import { Search } from "./Search";

interface Props {
  onCityChange: (city: string) => void;
}

export const Navbar = ({ onCityChange }: Props) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>
            Weather<span>App</span>
          </h1>
        </div>
      </nav>
      <Search onCityChange={onCityChange} />
    </>
  );
};
