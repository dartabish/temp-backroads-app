import { pageLinks } from '../data';

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map(pageLink => {
        const { id, href, text } = pageLink;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={childClass}
            >
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
