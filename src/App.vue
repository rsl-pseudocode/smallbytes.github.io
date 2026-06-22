<template>
  <v-app>
    <v-container>
      <header>
        <v-sheet
          class="header-box"
          :style="{
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 10,
            background: 'rgba(22, 22, 22, 0.7)',
            backdropFilter: 'blur(1px)',
            borderBottomLeftRadius: '12px',
            padding: '8px 0',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          }"
        >
          <v-row justify="end" no-gutters>
            <v-col cols="auto">
              <v-btn
                icon
                variant="text"
                href="https://www.linkedin.com/in/robert-sorman-lundgren/"
                target="_blank"
                color="#0077b5"
                class="pulse"
                aria-label="Connect with Robert on LinkedIn"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn
                icon
                variant="text"
                href="mailto:hello@smallbytes.se"
                color="secondary"
                class="pulse mr-2"
                aria-label="Email Small Bytes"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </header>

      <main>
        <v-row justify="center" class="pt-4" id="intro">
          <v-col cols="12" class="d-flex justify-center">
            <div class="profile-container mb-3 mt-3">
              <ImageComponent image-url="./IMG_profile.jpg" />
            </div>
          </v-col>

          <v-col cols="12" class="text-center">
            <h1 class="gradient-text text-h2 text-sm-h1 mb-1 font-weight-bold">
              Hi, I'm Robert
            </h1>

            <h2 class="text-h5 text-sm-h4 white--text">
              A freelance full stack engineer based in Sweden
            </h2>
          </v-col>

          <v-col cols="12" sm="8" md="7" class="text-center">
            <v-sheet color="transparent" class="pa-1">
              <p
                class="text-body-1 mb-4"
                :style="{ color: '#a0a0a0', fontSize: '1.05rem', lineHeight: 1.6 }"
              >
                With over 11 years as a developer I still truly enjoy learning
                new things every day. I like to create effective, reliable and
                efficient applications. <br />
                I'm experienced in both front-end and back-end development, with
                my main focus on technologies like .Net, Blazor and React.
              </p>

              <v-divider
                class="my-4"
                :style="{ backgroundColor: 'rgba(207, 142, 0, 0.3)' }"
              />

              <div class="d-flex justify-center mt-4">
                <v-btn
                  color="secondary"
                  variant="flat"
                  prepend-icon="mdi-email"
                  href="mailto:hello@smallbytes.se"
                  class="font-weight-bold"
                  :style="{
                    '&:hover': {
                      backgroundColor: '#ffb224',
                      color: '#ffffff',
                    },
                  }"
                >
                  Contact Me
                </v-btn>
              </div>

              <p
                class="text-body-2 mt-4 font-italic"
                :style="{ color: '#a0a0a0' }"
              >
                Collaboration is key.
              </p>
            </v-sheet>
          </v-col>

          <v-col cols="12" class="mt-4" id="projects">
            <section aria-labelledby="products-heading">
              <h2
                id="products-heading"
                class="gradient-text text-h4 font-weight-bold text-center mb-1 pt-4 position-relative d-inline-block w-100"
              >
                My Products
                <div
                  :style="{
                    position: 'absolute',
                    height: '3px',
                    width: '80px',
                    background: 'linear-gradient(90deg, #cf8e00, transparent)',
                    bottom: '-10px',
                    left: 'calc(50% - 40px)',
                    borderRadius: '2px',
                  }"
                />
              </h2>
            </section>
          </v-col>

          <v-col cols="12">
            <v-row class="mt-3 mb-4">
              <v-col cols="12" sm="6" md="4">
                <article
                  class="pa-4 h-100 d-flex flex-column"
                  itemscope
                  itemtype="https://schema.org/SoftwareApplication"
                >
                  <v-sheet
                    color="transparent"
                    class="h-100 d-flex flex-column"
                  >
                    <h3
                      itemprop="name"
                      class="gradient-text text-h5 mb-4 font-weight-bold white--text"
                    >
                      Runivers.se
                    </h3>

                    <p
                      itemprop="description"
                      class="text-body-1 mb-6 flex-grow-1"
                      :style="{ color: '#a0a0a0', lineHeight: 1.6 }"
                    >
                      A community platform for Swedish runners I built and
                      run. Handles race event aggregation, user reviews, and
                      community features. Built with Remix/React Router 7.
                    </p>

                    <v-btn
                      variant="outlined"
                      color="secondary"
                      append-icon="mdi-launch"
                      href="https://www.runiverse.se"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="align-self-start"
                      itemprop="url"
                      aria-label="Visit Runivers.se website (opens in new tab)"
                    >
                      Visit Website
                    </v-btn>
                  </v-sheet>
                </article>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <article
                  class="pa-4 h-100 d-flex flex-column"
                  itemscope
                  itemtype="https://schema.org/SoftwareApplication"
                >
                  <v-sheet
                    color="transparent"
                    class="h-100 d-flex flex-column"
                  >
                    <h3
                      itemprop="name"
                      class="gradient-text text-h5 mb-4 font-weight-bold white--text"
                    >
                      Glommig.se
                    </h3>

                    <p
                      itemprop="description"
                      class="text-body-1 mb-6 flex-grow-1"
                      :style="{ color: '#a0a0a0', lineHeight: 1.6 }"
                    >
                      "Glöm mig" — A GDPR tool I built that lets users select
                      companies from a curated directory and automatically
                      generates and sends properly formatted erasure request
                      emails. Built with Remix/React Router 7.
                    </p>

                    <v-btn
                      variant="outlined"
                      color="secondary"
                      append-icon="mdi-launch"
                      href="https://glommig.se"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="align-self-start"
                      itemprop="url"
                      aria-label="Visit Glommig.se website (opens in new tab)"
                    >
                      Visit Website
                    </v-btn>
                  </v-sheet>
                </article>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <article
                  class="pa-4 h-100 d-flex flex-column"
                  itemscope
                  itemtype="https://schema.org/SoftwareApplication"
                >
                  <v-sheet
                    color="transparent"
                    class="h-100 d-flex flex-column"
                  >
                    <h3
                      itemprop="name"
                      class="gradient-text text-h5 mb-4 font-weight-bold white--text"
                    >
                      IsItActuallyOpen.com
                    </h3>

                    <p
                      itemprop="description"
                      class="text-body-1 mb-6 flex-grow-1"
                      :style="{ color: '#a0a0a0', lineHeight: 1.6 }"
                    >
                      Google says yes, reality says no. IsItActuallyOpen.com
                      helps people check whether shops, restaurants and venues
                      are actually open, using fresh local reports when listed
                      opening hours cannot be trusted.
                    </p>

                    <v-btn
                      variant="outlined"
                      color="secondary"
                      append-icon="mdi-launch"
                      href="https://isitactuallyopen.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="align-self-start"
                      itemprop="url"
                      aria-label="Visit Is It Actually Open website (opens in new tab)"
                    >
                      Visit Website
                    </v-btn>
                  </v-sheet>
                </article>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" class="d-flex justify-center" id="skills">
            <SkillComponent />
          </v-col>
        </v-row>
      </main>

      <footer class="text-center">
        <p class="text-body-2" :style="{ color: '#a0a0a0' }">
          © {{ currentYear }} Small Bytes. All rights reserved.
        </p>
      </footer>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ImageComponent from './components/ImageComponent.vue'
import SkillComponent from './components/SkillComponent.vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style>
@import './App.css';
</style>
