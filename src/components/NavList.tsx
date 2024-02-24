import Link from 'next/link'
import { AllNavs } from '@/queries/navigations'
import { NavigationModel } from 'models/navigation';

async function getNavs(): Promise<NavigationModel[]> {
  const res = await fetch(process.env.HYGRAPH_ENDPOINT, {
    next: { revalidate: 10 },
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: AllNavs,
    })
  }).then((res) => res.json());
  if (res.errors) {
    console.error(res.errors)
    throw new Error(res.errors[0].message)
  }
  return res.data.navigations as NavigationModel[]
}

export default async function NavList({ navId }) {
  const navItems = await getNavs()
  return (
    <>
      {navItems.map((navItem) => {
        const url = navItem.link[0].externalUrl || navItem.link[0].page.slug
        return (
          <li key={navItem.id}>
            <Link href={`/${url}`}>{navItem.link[0].displayText}</Link>
          </li>
        )
      })}
    </>
  )
}
