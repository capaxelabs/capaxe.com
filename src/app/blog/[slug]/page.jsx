import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Metadata, ResolvingMetadata } from 'next'
import { getDatabase, getBlocks, getPageFromSlug } from '@/lib/notion'
import Text from '@/components/notion/renderer'
import { renderBlock } from '@/components/notion/renderer'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const database = await getDatabase()
  return database?.map((page) => {
    if ('properties' in page) {
      const slug = page.properties?.Slug?.formula?.string

      return { id: page.id, slug }
    }
  })
}

export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug

  // fetch data
  const page = await getPageFromSlug(slug)
  console.log(page)
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
  const featuredImage = page.properties['Featured image']?.files.url
  return {
    title: page.properties?.Title?.title,
    openGraph: {
      images: [featuredImage, ...previousImages]
    }
  }
}

export default async function Page({ params }) {
  const page = await getPageFromSlug(params?.slug)
  const blocks = await getBlocks(page?.id)

  if (!page || !blocks) {
    return <div />
  }

  return (
    <article className="container max-w-xl py-6 lg:py-32 ">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4 mb-10">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            <Text title={page.properties.Title?.title} />
          </h1>
        </div>
      </div>

      <section>
        {blocks.map((block) => (
          <Fragment key={block.id}> {renderBlock(block)}</Fragment>
        ))}
        <Link href="/blog" className="back-link">
          ← Go back
        </Link>
      </section>
    </article>
  )
}
