import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import YOUniversity from '../../public/youniversity.svg';
import clsx from 'clsx';
import { useScrollDirection } from '../hooks/use-scroll-direction';

interface NavItem {
  className?: string,
  labelClassName?: string,
  label: string,
  href: string,
  shallow?: boolean,
}

const navigation: NavItem[] = [
  {
    label: "Características",
    href: "/#features",
    shallow: true,
  },
  {
    label: "Nosotros",
    href: "/#about-us",
    shallow: true,
  },
];

interface HeaderProps {
  className?: string,
}

export const Header = (props: HeaderProps): React.ReactElement => {
  const scroll = useScrollDirection(10);

  return (
    <header className={clsx(props.className, "h-24 sticky top-0 w-full z-50 transition-top", scroll === "down" ? "-top-24" : "top-0")}>
      <Popover className="relative w-full">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-6 md:space-x-10">
            <div className="flex justify-start">
              <Link href="/#" shallow scroll>
                <a className="flex items-center space-x-4">
                  <YOUniversity className="h-10 w-auto" />
                  <span className="text-2xl text-primary font-semibold hidden sm:inline">
                    YOUniversity
                  </span>
                </a>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Abrir menú</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <nav className="hidden space-x-10 md:flex">
              {navigation.map(item => (
                <Link key={item.href} href={item.href} shallow={item.shallow} scroll>
                  <a className={clsx(item.className, "text-base font-medium text-gray-500 hover:text-gray-900")}>
                    <span className={item.labelClassName}>
                      {item.label}
                    </span>
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            {({ close }) => (
              <div className="rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <YOUniversity className="h-10 w-auto" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Cerrar menú</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {navigation.map(item => (
                        <Link key={item.href} href={item.href} shallow={item.shallow} scroll>
                          <a className={clsx(item.className, "-m-3 flex items-center rounded-md p-3 hover:bg-gray-50")} onClick={() => close()}>
                            <span className={clsx(item.labelClassName, "ml-3 text-base font-medium text-gray-900")}>
                              {item.label}
                            </span>
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};
