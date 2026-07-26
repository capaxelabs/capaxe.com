import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string().optional(),
		tags: z.array(z.string()).optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const caseStudies = defineCollection({
	// Load Markdown and MDX files in the `src/content/case-studies/` directory.
	loader: glob({ base: './src/content/case-studies', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		client: z.string(),
		description: z.string(),
		problemStatement: z.string(),
		solution: z.string(),
		timeframe: z.string(),
		techStack: z.array(z.string()),
		heroImage: z.string().optional(),
		// Logo configuration
		logos: z.object({
			client: z.object({
				src: z.string(),
				alt: z.string().optional(),
			}).optional(),
			technologies: z.array(z.object({
				name: z.string(),
				src: z.string(),
				alt: z.string().optional(),
			})).optional(),
		}).optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const buildMethod = z.enum(['app', 'theme', 'custom']);

const patterns = defineCollection({
	// Long-form pattern essays: a commerce problem, the platform's real limits,
	// the failure mode that bites in production, and the three ways to build it.
	loader: glob({ base: './src/content/patterns', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		category: z.enum(['pdp', 'collection', 'cart', 'checkout', 'b2b', 'ops']),
		/** One sentence; used as the meta description and in listings. */
		problem: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		/** Rendered as the three-routes block. */
		routes: z
			.array(
				z.object({
					method: buildMethod,
					summary: z.string(),
					cost: z.string().optional(),
					breaks: z.string().optional(),
				}),
			)
			.default([]),
		/** Related pattern slugs, for internal linking. */
		related: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		name: z.string(),
		description: z.string(),
		url: z.string(),
		problemStatement: z.string(),
		solution: z.string(),
		timeframe: z.string(),
		techStack: z.array(z.string()),
		category: z.string(),
		pubDate: z.coerce.date(),
	}),
});

export const collections = { blog, caseStudies, projects, patterns };
