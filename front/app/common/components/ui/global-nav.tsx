'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function GlobalNav() {
  const pathname = usePathname();
  const paths = [
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/experience',
      name: 'Experience',
    },
    {
      path: '/contact',
      name: 'Contact',
    },
  ];

  return (
    <nav
      className={`${
        pathname === '/' ? 'main-text' : ''
      } font-header sticky top-0 z-10 grid h-[62px] w-full grid-cols-2 items-center justify-center bg-[hsla(0,0%,100%,.8)] px-[178px] py-[23px] backdrop-blur-sm backdrop-saturate-150`}
    >
      <div className="flex justify-start">
        <Link href="/">Yoonsung Baek</Link>
      </div>

      <div className="flex justify-end gap-x-[44px]">
        {paths.map((p) => (
          <Link className={`${pathname === p.path ? 'font-semibold' : ''}`} key={p.path} href={p.path}>
            {p.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default GlobalNav;
