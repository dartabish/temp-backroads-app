import { socialLinks } from '../data';

const SocialLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map(link => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={childClass}
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
