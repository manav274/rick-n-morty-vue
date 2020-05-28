<template>
	<main id="app" class="d-flex flex-column flex-sm-column flex-md-row py-5 col col-12 col-sm-12 bg">
		<div class="col col-12 col-sm-12 col-md-2">
      <h1 class="center">Rick and Morty Vue App</h1>
    </div>

    <hr>
    <div class="col col-12 col-sm-12 col-md-2">
			<app-filter></app-filter>
		</div>
		<div class="col col-12 col-sm-12 col-md-10">
			App Listing
		</div>
	</main>
</template>

<script>
import AppFilter from "./components/filters/AppFilter.vue";
export default {
	name: "app",
	data() {
		return {};
  },
  components :{
    AppFilter
  }
};
</script>

<style lang="scss" scoped>

</style>
