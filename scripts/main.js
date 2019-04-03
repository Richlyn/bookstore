Vue.component("modal", {
  template: "#modal-template"
});

new Vue({
  el: "#bookstore",
  data() {
    console.log(1);
    return {
      urlBooks: "https://api.myjson.com/bins/udbm5",
      books: [],
      search: " "
    };
  },

  computed: {
    filteredBooks: function() {
      return this.books.filter(book => {
        return (
          book.titulo.toLowerCase().includes(this.search.toLowerCase()) ||
          book.descripcion.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  },
  methods: {
    getData(url) {
      fetch(url, {
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors"
      })
        .then(response => {
          //console.log(2);
          return response.json();
        })

        .then(data => {
          // console.log(3);
          this.books = data.books; //pulls the book with index 0
          console.log("books" + this.books);
        })
        .catch(err => console.log(err));
    }
  },

  //find way to join mounting using ( includes & titles )
  mounted() {
    if (document.title == "Home") {
      this.getData(this.urlBooks);
      console.log(document.title);
    }
  }
});
