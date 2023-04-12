import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      In Chicago
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/things-to-do">Things To Do</Link>
        </li>
        <li>
          <Link href="/food-and-drink">Food&Drink</Link>
        </li>
        <li>
          <Link href="/attractions">Attractions</Link>
        </li>
        <li>
          <Link href="/art-and-culture">Art&Culture</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
