<template>
  <div class="flex min-h-screen flex-col bg-white text-neutral-900">
    <header class="border-b border-neutral-200">
      <nav class="mx-auto flex w-full max-w-4xl items-center gap-6 px-6 py-4 text-sm">
        <router-link class="font-semibold tracking-tight" to="/">vue express</router-link>
        <router-link class="text-neutral-500 transition-colors hover:text-neutral-900" to="/">
          home
        </router-link>
      </nav>
    </header>

    <main class="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
      <router-view />
    </main>

    <footer class="border-t border-neutral-200 px-6 py-4 text-center text-xs text-neutral-500">
      vue + express
    </footer>
  </div>
</template>
