<template>
  <ul class="nav-menu-mobile">
    <li v-for="route in routes"
        :key="route.id"
        :class="{'active': route.path === index}">
      <router-link :to="route.path">{{route.name}}</router-link>
    </li>
    <a-input-search placeholder="Search title."
                    enter-button
                    @search="onSearch"
                    autofocus />
  </ul>
</template>