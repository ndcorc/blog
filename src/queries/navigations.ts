const AllNavs = `
query AllNavs {
  navigations {
    id
    navId
    link {
      externalUrl
      displayText
      page {
        ... on Page {
          id
          slug
        }
      }
    }
  }
}
`

const SingleNav = `
query SingleNav($navId:String!) {
  navigation(where: {navId: $navId}) {
    id
    link {
      externalUrl
      displayText
      page {
        ... on Page {
          id
          slug
        }
      }
    }
    navId
  
  }
}
`

export { SingleNav, AllNavs }
