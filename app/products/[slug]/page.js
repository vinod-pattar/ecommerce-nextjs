function stringToSlug(str) {
  return str
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters (except spaces and hyphens)
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Remove multiple hyphens
}

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: stringToSlug(post.title),
  }))
}


export default async function Page({ params }) {
    const slug = (await params).slug
    return <div>My Product: {slug}</div>
  }