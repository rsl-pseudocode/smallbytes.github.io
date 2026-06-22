# Portfolio Redesign Design

## Goal

Redesign the Small Bytes portfolio page so it explains Robert's current direction faster and with more confidence:

- Senior full stack engineer with 11+ years of delivery experience.
- Product-minded profile shaped by running real products.
- Open to senior developer roles.
- Interested in Technical Product Owner and Product Owner opportunities.

The redesign should keep the existing content and meaning, but improve visual hierarchy, confidence, readability, and product proof.

## Selected Direction

Use the structure from mockup A and the visual language from mockup B.

The page should feel like:

- Crisp light background.
- Heavy, direct typography.
- Strong product badges/cards for Runivers, Glöm mig, and Is It Actually Open.
- Clear early explanation of the two target paths:
  - Senior developer roles.
  - TPO / PO opportunities.

The site should not become a generic consultant template. It should feel personal, product-driven, and specific to Robert's actual experience.

## Page Structure

### Header

Keep a minimal navigation/header with Small Bytes branding and direct contact/social actions.

Recommended visible links/actions:

- Products
- How I work
- Contact
- LinkedIn/email icons or compact actions

### Hero

Move from the current dark centered profile layout to a stronger editorial hero:

- Light background.
- Large, heavy headline.
- Profile image retained, but framed in a more deliberate layout rather than a simple circular avatar.
- Contact action visible in the first viewport.

Candidate headline:

> Senior engineer with a product owner brain.

Supporting copy should preserve the current meaning:

Robert has 11+ years as a developer, still enjoys learning and building, and has grown increasingly interested in product work: understanding the problem, choosing what should ship first, and learning from real users.

### Role Boxes

Place two role boxes immediately below the hero. These are the strongest part of the selected direction and should remain prominent.

Box 1: Senior developer roles

- Keep the technical credibility clear.
- Mention .NET, Blazor, Vue, React, and full stack delivery.

Box 2: TPO / PO opportunities

- Use a dark high-emphasis treatment.
- Explain that running products shaped Robert's thinking about requirements, prioritization, UX, operations, and real user value.
- The body text inside this dark box must have strong contrast. Do not use low-opacity gray text. Use a near-light text color such as `rgba(247, 242, 232, 0.88)` or stronger, and verify it visually.

### Products

Rename product cards exactly:

- Runivers
- Glöm mig
- Is It Actually Open

Use bold product badges/cards, not quiet text-only articles. Each product should quickly show what kind of product judgment it demonstrates:

- Runivers: community/race data product, user feedback, feature design, race data aggregation, reviews, day-to-day operation.
- Glöm mig: GDPR erasure request flow, legal complexity translated into simple UX.
- Is It Actually Open: crowdsourced utility for checking real opening status when listed hours cannot be trusted. Include the line "Google says yes, reality says no." as a memorable product hook.

Cards should feel distinct through color and label, while still fitting a coherent visual system.

### How I Work

Keep the four current principles, but make them more concise and confident:

- Start with the problem.
- Ship the smallest useful version.
- Bridge product, business and code.
- Own the full lifecycle.

This section should read as operating principles for product-heavy engineering work, not as generic soft skills.

### Tech Stack

Keep the tech stack, but visually reduce its dominance. It should support the profile rather than compete with the product/role story.

Preferred treatment:

- Compact pill row or compact icon row.
- Keep accessibility labels/tooltips.
- Avoid large interactive expansion unless it clearly improves the page.

## Visual System

Use a warm, crisp, high-confidence palette:

- Background: warm off-white, similar to `#f7f2e8`.
- Text: near-black, similar to `#14161c`.
- Accent: warm amber/gold, similar to `#d99522`.
- Product support colors:
  - Runivers: green/teal family.
  - Glöm mig: blue family.
  - Is It Actually Open: amber/dark utility family.

Typography should be heavier than the current page:

- Large hero headline.
- Bold section headings.
- Shorter line lengths for body text.
- No negative letter spacing.

Cards should use 8px or similar border radius, visible borders, and deliberate shadow/offset accents. Avoid generic glassmorphism and avoid making every section a floating card.

## Accessibility

- Maintain semantic sections and headings.
- Keep clear link/button labels.
- Ensure body copy has sufficient contrast on both light and dark backgrounds.
- In particular, the TPO / PO dark box body text must be easy to read.
- Preserve keyboard-accessible links and buttons.
- Profile image alt text should remain meaningful.

## SEO And Metadata

Preserve existing SEO intent and structured data:

- Person, Organization, WebSite, ProfessionalService schema.
- Product/application structured data for Runivers, Glöm mig, and Is It Actually Open.
- Existing title/description can be refined only if needed to match the new visible positioning.

## Implementation Notes

The implementation should stay scoped to the current Vue/Vuetify one-page app:

- `src/App.vue`
- `src/App.css`
- `src/index.css`
- `src/components/ImageComponent.vue` and `src/components/SkillComponent.vue` only if needed.

Avoid introducing a new design framework. Use existing Vue/Vuetify setup and custom CSS where it keeps the page clearer.

Do not remove the user's existing local content changes without review.

## Verification

Before calling the implementation complete:

- Run `npm run build`.
- Inspect the page in browser at desktop and mobile widths.
- Check product names exactly:
  - Runivers
  - Glöm mig
  - Is It Actually Open
- Check that the dark TPO / PO box body text is readable against its background.
- Confirm no obvious text overlap or truncation.
