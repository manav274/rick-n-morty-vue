<template>
	<main id="app" class="d-flex flex-column flex-sm-column flex-md-row py-5 col col-12 col-sm-12 bg">
    <div class="col col-12 col-sm-12 col-md-2">
			<app-filter></app-filter>
		</div>
		<div class="col col-12 col-sm-12 col-md-10">
			<character-card></character-card>
		</div>
	</main>
</template>

<script>
import AppFilter from "./components/filters/AppFilter.vue";
import CharacterCard from "./components/characterCard/CharacterCard.vue";
export default {
	name: "app",
	data() {
		return {};
  },
  components :{
    AppFilter,
    CharacterCard
  }
};
</script>

<style lang="scss" scoped>

</style>
