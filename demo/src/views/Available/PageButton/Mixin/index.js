export default {
  props: {
    pageSize: {
      type: Number,
      default: 10,
    },
    totalPage: {
      type: Number,
      default: 10,
    },
    currPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      initialPage: 1,
      jumpPage: '',
    };
  },
  computed: {
    pages() {
      const pageArray = [];
      if (this.totalPage <= 5) {
        for (let i = 1; i <= this.totalPage; i++) {
          pageArray.push(i);
        }
      } else {
        let startPage = Math.max(this.cpuPage - 2, 2);
        let endPage = Math.min(startPage + 3, this.totalPage - 1);

        // 如果最后一页小于或等于5页，则显示所有页面直到结束
        if (this.totalPage - this.cpuPage <= 5) {
          startPage = this.totalPage - 4;
          endPage = this.totalPage - 1;
        }

        //第一个按钮总是1
        pageArray.push(1);

        if (startPage > 2) pageArray.push('•••');

        for (let i = startPage; i <= endPage; i++) {
          pageArray.push(i);
        }

        if (endPage < this.totalPage - 1) pageArray.push('•••');

        // 最后一个按钮总是最后一页
        pageArray.push(this.totalPage);
      }
      this.displayedPages = pageArray;
      return this.displayedPages;
    },
    cpuPage: {
      get() {
        return this.currPage;
      },
      set(val) {
        this.$emit('update:currPage', val);
      },
    },
  },
  methods: {
    changePage(page, index) {
      if (page === '•••') {
        if (index === 1) {
          this.cpuPage = this.cpuPage - 5;
        } else {
          this.cpuPage = this.cpuPage + 5;
        }
      } else {
        this.cpuPage = page;
      }
    },
    prevPage() {
      this.cpuPage = this.cpuPage > 1 ? this.cpuPage - 1 : 1;
    },
    nextPage() {
      this.cpuPage =
        this.cpuPage < this.totalPage ? this.cpuPage + 1 : this.totalPage;
    },
    jumpToPage(jumpPage) {
      var page = parseInt(jumpPage);
      if (isNaN(page)) {
        this.$message.error('请输入正确的页码');
        return;
      }
      if (page > this.totalPage || page < 1) {
        this.$message.error('请输入正确的页码');
      } else {
        this.cpuPage = page;
      }
    },
    prevDisabled() {
      return this.cpuPage === 1;
    },
    nextDisabled() {
      return this.cpuPage === this.totalPage;
    },
  },
  //   watch: {
  //     cpuPage() {
  //         console.log(
  //           '监测到了currPage发生了变化,所以重新渲染list,此时currPage的值为:',
  //           this.cpuPage
  //         );
  //       console.log('cpuPage变化了', this.cpuPage);
  //     },
  //   },
};
