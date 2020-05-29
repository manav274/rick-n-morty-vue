export default {
    computed: {
        characters() {
           console.log(2);
          console.log('from character js' + this.$store.getters.filteredCharacters);
            return !this.$store.getters.filteredCharacters
                ? false
                : this.$store.getters.filteredCharacters;
        },
        ifPrev() {
            let prevPage = this.$store.getters.previousPage;
            return prevPage != null ? true : false;
        },
        ifNext() {
            let nextPage = this.$store.getters.nextPage;
            return nextPage != null ? true : false;
        }
    },
    created() {
      console.log('1');
        this.$store.dispatch("getCharacters");
    },
    methods: {
        previousPage() {
            const prevPage = this.$store.getters.previousPage;
            if (prevPage != null) {
                this.$store.dispatch("getCharacters", { url: prevPage });
            }
        },
        nextPage() {
            const nextPage = this.$store.getters.nextPage;
            if (nextPage != null) {
                this.$store.dispatch("getCharacters", { url: nextPage });
            }
        }
    }
};
