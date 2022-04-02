<template>
  <div class="page_layout">
    <h1>{{ msg }}</h1>
    <div>
      <ul>
        <li v-for="movie in data" :key="movie.id">
          {{ movie.name }}
          <img :src="movie.imageUrl" :alt="movie.name" />
        </li>
      </ul>
    </div>
    <TheFooter />
  </div>
</template>


