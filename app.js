function myObj() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => {
      const res = json.map((i) => ({
        postId: i.postId,
        id: i.id,
        calculate: function () {
          console.log(
            "Firdavs:",
            "Matematika:",
            this.postId,
            "Fizika:",
            this.id,
            "Natija:",
            this.postId + this.id
          );
        },
      }));
      res.forEach((iteam) => {
        iteam.calculate();
      });
    });
}
myObj();
