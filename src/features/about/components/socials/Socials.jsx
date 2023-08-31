import { SOCIALS } from "../../../../constants";

const Socials = () => {
  return (
    <ul>
      {SOCIALS.map((link) => {
        return (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
