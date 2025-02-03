import Link from 'next/link'
import { getDatabase } from '@/lib/notion'
import Text from '@/components/notion/renderer'
import Image from 'next/image'

async function getPosts() {
  const database = await getDatabase()

  return database
}

export default async function Page() {
  const posts = await getPosts()
  return (
    <section className="container max-w-4xl py-6 lg:py-32">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">Learn more with these blogs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => {
          const date = new Date(post.last_edited_time).toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
          })
          const slug = post.properties?.Slug?.formula.string
          console.log(post.properties?.['Featured image']?.files[0]?.file)
          const featuredImage = post.properties?.['Featured image']?.files[0]?.file?.url || null

          return (
            <article className="bg-white rounded-lg shadow-md overflow-hidden" key={post.id}>
              {featuredImage && (
                <div className="aspect-video w-full relative">
                  <Image
                    src={featuredImage}
                    width={100}
                    height={100}
                    alt={`Cover image for ${post.properties?.Title?.title}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <time dateTime={post.last_edited_time}>{date}</time>
                  {post.properties?.Category?.select && (
                    <>
                      <span>•</span>
                      <span>{post.properties.Category.select.name}</span>
                    </>
                  )}
                </div>

                <Link href={`/blog/${slug}`}>
                  <h2 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                    <Text title={post.properties?.Title?.title} />
                  </h2>
                </Link>

                <p className="text-gray-600 mb-4">
                  <Text title={post.properties?.Excerpt?.rich_text} />
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                    href={`/blog/${slug}`}
                  >
                    Read More
                    <span aria-hidden="true">→</span>
                  </Link>

                  {post.properties?.Tags?.multi_select && (
                    <div className="flex gap-2">
                      {post.properties.Tags.multi_select.map((tag) => (
                        <span
                          key={tag.id}
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
