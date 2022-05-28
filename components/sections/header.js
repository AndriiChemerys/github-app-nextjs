import Link from "next/link"

export default function Header() {
  return(
    <header>
      Hello footer
      <nav> 
        <ul>
          <li>
            <Link href="/">Index</Link>
          </li>
          <li>
            <Link href="/results">Results</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}