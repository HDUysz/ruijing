export default {
  data() {
    return {
      newsList: [],
      currentPage: 1,
      itemsPerPage: 0,
      totalPages: 0,
      jumpPage: 1,
    };
  },
  computed: {
    pages() {
      const start = Math.max(1, this.currentPage - 2);
      const end = Math.min(this.totalPages, this.currentPage + 2);
      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
    prevPage() {
      return this.currentPage - 1;
    },
    nextPage() {
      return this.currentPage + 1;
    },
  },
  methods: {
    fetchData() {
      // Fetch the data here. This method should be overridden in the component using the mixin.
    },
    changePage() {
      //this.$emit('update:currentPage', newPage); // Emitting an event to update the currentPage prop in the parent component
      this.fetchData();
    },
  },
  watch: {
    currentPage(newPage) {
      const maxPage = this.totalPages;
      if (newPage < 1) {
        this.currentPage = 1;
      } else if (newPage > maxPage) {
        this.currentPage = maxPage;
      }
      this.changePage();
    },
  },
  created() {
    this.fetchData();
  },
};
