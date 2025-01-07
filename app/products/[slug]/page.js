export default async function Page({ params }) {
    const slug = (await params).slug
    return <div>My Product: {slug}</div>
  }