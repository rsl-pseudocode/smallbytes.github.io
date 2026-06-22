<template>
  <v-app>
    <header class="site-header">
      <a class="brand" href="#intro" aria-label="Small Bytes home">
        <span class="brand-mark" aria-hidden="true" />
        <span>Small Bytes</span>
      </a>

      <nav class="site-nav" aria-label="Main navigation">
        <a href="#products">Products</a>
        <a href="#collaboration">How I work</a>
        <a href="mailto:hello@smallbytes.se">Contact</a>
      </nav>

    </header>

    <main class="page-shell">
      <section class="hero-section" id="intro" aria-labelledby="intro-heading">
        <div class="hero-copy">
          <p class="section-kicker">Product-minded full stack engineer based in Sweden</p>
          <h1 id="intro-heading">
            Senior engineer with a <span>product owner</span> brain.
          </h1>
          <p class="hero-lede">
            With 11+ years as a developer, I still enjoy learning and building.
            Over time, I have become just as interested in the product side:
            understanding the problem, choosing what should ship first, and
            learning from real users.
          </p>
          <p class="hero-support">
            My background is in .NET, Blazor, Vue, React, and full stack
            delivery. Running my own products has shaped how I think about
            requirements, prioritization, UX, operations, and real user value.
          </p>

          <div class="hero-actions">
            <a class="button-primary" href="mailto:hello@smallbytes.se">
              <v-icon aria-hidden="true">mdi-email</v-icon>
              <span>Contact me</span>
            </a>
            <a class="button-secondary" href="#products">
              <span>View products</span>
            </a>
          </div>
        </div>

        <aside class="hero-portrait" aria-label="Robert profile summary">
          <div class="portrait-card">
            <img
              src="/IMG_profile.jpg"
              alt="Robert Sörman Lundgren - product-minded full stack engineer"
              width="240"
              height="276"
            />
          </div>
          <div class="availability-card">
            Open to senior developer roles. Interested in TPO/PO opportunities.
          </div>
        </aside>
      </section>

      <section class="role-strip" aria-label="Role fit">
        <article class="role-card">
          <h2>Senior developer roles</h2>
          <p>
            My background is in .NET, Blazor, Vue, React, and full stack
            delivery.
          </p>
        </article>

        <article class="role-card product">
          <h2>Technical Product Owner/Product Owner opportunities</h2>
          <p>
            Running my own products has shaped how I think about requirements,
            prioritization, UX, operations, and real user value.
          </p>
        </article>
      </section>

      <section
        class="content-band products-band"
        id="products"
        aria-labelledby="products-heading"
      >
        <div class="section-heading">
          <h2 id="products-heading">Products I have taken from idea to production.</h2>
          <p>
            Three standalone products built to solve completely different
            problems: running events, GDPR compliance, and broken opening hours.
          </p>
        </div>

        <div class="product-grid">
          <article
            class="product-badge runivers"
            itemscope
            itemtype="https://schema.org/SoftwareApplication"
          >
            <span class="product-label">Community platform</span>
            <h3 itemprop="name">Runivers</h3>
            <p itemprop="description">
              A community platform for Swedish runners. I handle user feedback,
              feature design, race data aggregation, reviews, and day-to-day
              operation.
            </p>
            <a
              class="stretched-product-link"
              href="https://www.runiverse.se"
              target="_blank"
              rel="noopener noreferrer"
              itemprop="url"
              aria-label="Visit Runivers website"
            >
              <span class="sr-only">Visit Runivers website</span>
            </a>
          </article>

          <article
            class="product-badge glom-mig"
            itemscope
            itemtype="https://schema.org/SoftwareApplication"
          >
            <span class="product-label">Legal UX</span>
            <h3 itemprop="name">Glöm mig</h3>
            <p itemprop="description">
              A GDPR tool that turns complex legal requirements into a simple
              user flow for generating and sending erasure requests.
            </p>
            <a
              class="stretched-product-link"
              href="https://glommig.se"
              target="_blank"
              rel="noopener noreferrer"
              itemprop="url"
              aria-label="Visit Glöm mig website"
            >
              <span class="sr-only">Visit Glöm mig website</span>
            </a>
          </article>

          <article
            class="product-badge actually-open"
            itemscope
            itemtype="https://schema.org/SoftwareApplication"
          >
            <span class="product-label">Crowdsourced utility</span>
            <h3 itemprop="name">Is It Actually Open</h3>
            <p itemprop="description">
              Google says yes, reality says no. UX and crowdsourcing logic for
              checking whether shops, restaurants, and venues are actually open
              when listed hours cannot be trusted.
            </p>
            <a
              class="stretched-product-link"
              href="https://isitactuallyopen.com"
              target="_blank"
              rel="noopener noreferrer"
              itemprop="url"
              aria-label="Visit Is It Actually Open website"
            >
              <span class="sr-only">Visit Is It Actually Open website</span>
            </a>
          </article>
        </div>
      </section>

      <section
        class="content-band"
        id="collaboration"
        aria-labelledby="work-heading"
      >
        <div class="section-heading">
          <h2 id="work-heading">How I work</h2>
          <p>
            The guardrails I use to ensure we build the right thing, the right
            way, without wasting time.
          </p>
        </div>

        <div class="work-grid">
          <article class="work-card">
            <h3>Start with the problem</h3>
            <p>
              Understand the user need, business goal, and constraints before
              choosing the technical path.
            </p>
          </article>

          <article class="work-card">
            <h3>Ship the smallest useful version</h3>
            <p>
              Keep scope clear, get core value into users' hands early, then
              iterate from feedback.
            </p>
          </article>

          <article class="work-card">
            <h3>Bridge product, business and code</h3>
            <p>
              Discuss outcomes with stakeholders, turn needs into requirements,
              and keep priorities grounded with developers.
            </p>
          </article>

          <article class="work-card">
            <h3>Own the full lifecycle</h3>
            <p>
              Keep architecture, UX, requirements, prioritization, deployment,
              and maintenance connected.
            </p>
          </article>
        </div>

        <ul class="tech-list" aria-label="Technical skills">
          <li>C#</li>
          <li>.NET</li>
          <li>Blazor</li>
          <li>Vue</li>
          <li>React</li>
          <li>AWS</li>
          <li>Azure</li>
        </ul>
      </section>
    </main>

    <footer class="site-footer">
      <strong>Small Bytes</strong>
      <span>© {{ currentYear }} · hello@smallbytes.se</span>
    </footer>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style>
@import './App.css';
</style>
