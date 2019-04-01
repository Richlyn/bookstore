new Vue({
  el: "#bookstore",
  data() {
    console.log(1);
    return {
      urlBooks: "https://api.myjson.com/bins/udbm5",
      books: []
    };
  },
  // computed: {
  //   filteredMembers: function() {
  //     if (this.selectedStates)
  //       console.log("hello im here" + this.selectedStates);
  //     if (
  //       this.checkedBoxes.partyChecked.length == 0 &&
  //       this.selectedStates === "ALL"
  //     ) {
  //       return this.members;
  //     } else {
  //       return this.members.filter(
  //         member =>
  //           (this.checkedBoxes.partyChecked.includes(member.party) &&
  //             member.state == this.selectedStates) ||
  //           (this.checkedBoxes.partyChecked.includes(member.party) &&
  //             this.selectedStates === "ALL") ||
  //           (this.checkedBoxes.partyChecked.length == 0 &&
  //             member.state == this.selectedStates)
  //       );
  //     }
  //   }
  // },
  methods: {
    getData(url) {
      fetch(url, {
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors"
      })
        .then(response => {
          console.log(2);
          return response.json();
        })

        .then(data => {
          console.log(3);
          this.books = data.books[0]; //pulls the book with index 0
          console.log("books" + this.books);

          // this.removeDuplicates(); create search engine function calling here
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

// Get the modal
var modal = document.getElementById("id01");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
