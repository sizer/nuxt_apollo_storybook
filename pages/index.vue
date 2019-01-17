<template>
  <ul>
    <p>your repositories</p>
    <li v-for="repo in allRepos" :key="repo.name">{{ repo.name }}</li>
  </ul>
</template>

<script>
import allRepos from '~/apollo/queries/allRepos'

export default {
  data: () => ({
    allRepos: {}
  }),
  apollo: {
    allRepos: {
      prefetch: true,
      query: allRepos,
      update: ({ user }) => user.repositories.nodes
    }
  }
}
</script>
