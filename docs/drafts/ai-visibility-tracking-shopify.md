# DRAFT: AI Visibility Tracking: See When ChatGPT Mentions Your Store

**Status:** outline, not written
**Target keyword:** ai visibility tracking shopify
**Secondary:** track chatgpt mentions, ai search rank tracking, brand monitoring ai
**Intent:** commercial
**Plan reference:** Bee Apps Content Plan, Phase 1b post #6
**Suggested pubDate:** Aug 21 2026

## Frontmatter (ready to paste)

```yaml
---
title: "AI Visibility Tracking: See When ChatGPT Mentions Your Store"
description: "What you can and can't measure about AI citations today, the four methods available, and how to tell a real signal from a dashboard estimate."
category: 'AI & Modern Dev'
tags: ["AEO", "AI search", "analytics"]
pubDate: 'Aug 21 2026'
heroImage: '/shopify-capaxe-labs.png'
---
```

## Angle

This is the commercial post in the cluster, so it has the strongest pull toward overclaiming. Resist it. The honest position is the differentiator: AI visibility measurement is immature, most tracking dashboards are sampling and estimating, and knowing that makes you better at using them. Competitors sell certainty. We sell an accurate picture.

The positioning note in the content plan applies here too: merchants who test the claims will trust the tool that did not exaggerate.

## Outline

**Intro.** You can see that AI search exists in your analytics. What you cannot easily see is whether you are in the answers, or which ones.

**1. Why this is hard**
- No Search Console equivalent. No impressions, no position, no query list
- Answers are personalised and non-deterministic. The same prompt returns different sources across sessions
- Citation is not traffic. You can be quoted with no click at all
- Set the expectation early: everything below is directional

**2. The four measurement methods, honestly rated**

| Method | What it tells you | What it misses | Effort |
|---|---|---|---|
| Referral traffic in GA4 | Real clicks from ChatGPT, Perplexity, Copilot | Every citation that did not get clicked | Low |
| Server log analysis | Which AI crawlers fetched what, and when | Whether the fetch became a citation | Medium |
| Manual prompt testing | Ground truth for the prompts you test | Everything you did not think to ask | Medium, ongoing |
| Third-party tracking tools | Scaled prompt sampling over time | Sampling error, opaque methodology | Low, paid |

**3. Setting up the two free ones properly**
- GA4: identify the referral sources, note that attribution is inconsistent across assistants
- Log analysis: what to grep for, which user agents, what a healthy pattern looks like
- Both are concrete and worth walking through step by step

**4. Running manual prompt tests that are actually useful**
- Build a fixed prompt set from real buyer questions, not brand-name searches. "Best waterproof jacket under 200" beats "is [brand] good"
- Test the same set on a schedule so results are comparable
- Record the sources cited, not only whether you appeared
- Note that testing your own brand name tells you almost nothing

**5. What to do with a bad result**
- This is the section that makes the post useful rather than depressing
- Route the reader back through the diagnostic order: crawler access, then structured data, then quotable copy, then authority
- Link the two upstream posts here

**6. Where the tooling sits**
- Honest framing: some tools measure, some tools fix. FSEO leans measurement. Bee AI SEO leans fixes
- Concede plainly that if tracking is the only thing you want, a tracker is a reasonable buy
- Bee AI SEO's angle: audit, bot accessibility testing, JSON-LD, meta tag scanning, llms.txt
- Internal link /shopify/apps/bee-ai-seo, App Store link https://apps.shopify.com/bee-llms-seo
- Disclosure line: "Bee Apps is built by our team at Capaxe Labs."

**Close.** Measurement without fixes tells you that you are invisible. Fixes without measurement leave you guessing. Most stores should start with fixes, because the fix list is short and known.

## Links to include

- Internal: /blog/aeo-vs-seo-shopify, /blog/schema-markup-for-ai-search, /blog/get-shopify-products-recommended-by-chatgpt
- Comparison: /shopify/compare/bee-ai-seo-vs-fseo (this is the measurement-focused competitor, so it is the most relevant one here)
- App: /shopify/apps/bee-ai-seo and https://apps.shopify.com/bee-llms-seo
- Capaxe: /capabilities

## Research needed before writing

- Confirm current GA4 referral source names for ChatGPT, Perplexity, and Copilot before publishing. These change.
- If we have real referral data from our own properties or a client who consents, one real screenshot or number makes this post far stronger than the alternatives.
- Verify FSEO's current feature set before characterising it. The comparison page already has a position; keep the blog consistent with it.

## Notes

Do not publish estimated AI ranking percentages. Do not claim the app tracks citations if it does not. Apply the humanize rules. Target 1,500 to 1,800 words.
