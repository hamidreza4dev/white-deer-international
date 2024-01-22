import Link from 'next/link';
import { forwardRef } from 'react';
import SvgLogo from '~/assets/logo.svg';
import MenuCloseButton from './menu-close-button';
import Icon from '../icon';
import { withId } from '~/utils';
import SvgArrowBroken from '~/assets/arrow-broken.svg';
import SvgFacebook from '~/assets/facebook.svg';
import SvgX from '~/assets/x.svg';
import SvgInstagram from '~/assets/instagram.svg';

const menuItems = withId([
  { text: 'Home', slug: '/' },
  { text: 'Recycling Essence', slug: '/' },
  { text: 'Brand', slug: '/' },
  { text: 'Products', slug: '/' },
  { text: 'Join newsletter', slug: '/' },
]);

const socials = withId([
  { title: 'Facebook', icon: <SvgFacebook />, href: 'https://google.com' },
  { title: 'X', icon: <SvgX />, href: 'https://google.com' },
  { title: 'Instagram', icon: <SvgInstagram />, href: 'https://google.com' },
]);

export type MenuProps = {};

export default forwardRef(function Menu({}: MenuProps, ref: any) {
  return (
    <div ref={ref} className="fixed left-0 top-0 z-50 h-screen w-screen">
      <div className="g--menu__container flex h-full w-full bg-black">
        <div className="g--menu__sidebar flex w-[30vw] flex-col items-start justify-between pb-10 pl-12 pr-8 pt-8">
          <Icon>
            <SvgLogo className="h-9" />
          </Icon>

          <p className="text-base leading-tight text-[#989898]">
            Elevate Your Surroundings with White Deer: Where Craftsmanship Meets
            Elegance.
          </p>
        </div>
        <div className="g--menu__items flex h-full grow flex-col justify-between bg-white px-14 py-10">
          <div className="flex justify-between">
            <span className="text-[#B9B9B9]">Navigation</span>
            <MenuCloseButton />
          </div>
          <div className="flex w-[70vw] flex-col justify-center">
            <ul className="font-pop space-y-6 text-7xl font-500 leading-none">
              {menuItems.map((nav) => (
                <li key={nav.slug}>
                  <Link
                    href={nav.slug}
                    className="group inline-flex items-center text-[#AEAEAE] transition duration-500 hover:text-black"
                  >
                    {nav.text}

                    <Icon className="text-black opacity-0 transition duration-500 group-hover:opacity-100">
                      <SvgArrowBroken className="scale-75" />
                    </Icon>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-end">
            <div>
              <h6 className="text-2xl font-500 text-[#030303]">
                Contact our <br />
                team via:
              </h6>
              <a
                href="https://oraniworld.com"
                className="mt-2 inline-block font-500 text-[#989898]"
              >
                Iraniworld.com
              </a>

              <div className="mt-8 flex gap-3.5">
                {socials.map((social) => (
                  <a
                    href={social.href}
                    key={social.id}
                    className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#DDDDDD] transition hover:border-[#949494]"
                  >
                    <Icon>{social.icon}</Icon>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
