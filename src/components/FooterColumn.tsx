interface FooterColumnProps {
    title: string;
    links: { name: string; href: string }[];
  }
  
  export default function FooterColumn({ title, links }: FooterColumnProps) {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-sm text-white hover:underline"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  