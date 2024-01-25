export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me",
      metadata: {
        title: 'Ramesh Yadav',
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com"
        }
      }
    }
  }
}

export default function Home() {
  return <div>About Me</div>
}
