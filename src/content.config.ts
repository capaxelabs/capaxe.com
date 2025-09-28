import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
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

export const collections = { blog, caseStudies };
