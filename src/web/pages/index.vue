<script setup lang="ts">
import { ref } from 'vue'

const status = ref('unknown')
const pending = ref(false)

const checkHealth = async () => {
  pending.value = true

  try {
    const response = await fetch('/api/health')
    const data = (await response.json()) as { status: string }
    status.value = data.status
  } catch {
    status.value = 'unreachable'
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <section class="space-y-6">
    <div class="space-y-2">
      <h1 class="text-2xl font-semibold tracking-tight">vue express template</h1>
      <p class="text-sm text-neutral-500">
        Frontend lives in <code class="rounded bg-neutral-100 px-1 py-0.5">src/web</code> and the
        API lives in <code class="rounded bg-neutral-100 px-1 py-0.5">src/server</code>.
      </p>
    </div>

    <div class="flex items-center gap-3">
      <button
        class="rounded-md border border-neutral-300 px-3 py-1.5 text-sm transition-colors hover:bg-neutral-100 disabled:opacity-50"
        :disabled="pending"
        @click="checkHealth"
      >
        Check API
      </button>
      <span class="text-sm text-neutral-500">status: {{ status }}</span>
    </div>
  </section>
</template>
