import { useState } from "react";

interface Props {
  onCityChange: (city: string) => void;
}

export const Search = ({ onCityChange }: Props) => {
  const [location, setLocation] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onCityChange(location);
    setLocation("");
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
