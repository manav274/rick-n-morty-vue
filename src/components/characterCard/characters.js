export default {
    computed: {
        characters() {
           console.log(2);
          console.log('from character js' + this.$store.getters.filteredCharacters);
            return !this.$store.getters.filteredCharacters
                ? false
                : this.$store.getters.filteredCharacters;
        },
        checkPrev() {
            let prev = this.$store.getters.prev;
            return prev != null ? true : false;
        },
        checkNext() {
            let next = this.$store.getters.next;
            return next != null ? true : false;
        }
    },
    created() {
      console.log('1');
        this.$store.dispatch("getCharacters");
    },
    methods: {
        prevPage() {
            const prev = this.$store.getters.prev;
            if (prev != null) {
                this.$store.dispatch("fetchCharacters", { url: prev });
            }
        },
        nextPage() {
            const next = this.$store.getters.next;
            if (next != null) {
                this.$store.dispatch("fetchCharacters", { url: next });
            }
        }
    }
};
