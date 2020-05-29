export default {
    data() {
        return {
            name: "",
            sortBy: "id",
            orderBy: "asc"
        };
    },
    methods: {
        characterSearch() {
            this.$store.dispatch("searchByName", this.name.toLowerCase());
        },
        sortArrangement() {
            this.$store.dispatch("sortArrangement", {
                sortBy: this.sortBy,
                orderBy: this.orderBy
            });
        }
    },
    computed: {
    }
};
