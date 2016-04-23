$('#cont').pagination({
  dataSource: page.posts.toArray(),
  callback: function (data, pagination) {
    // template method of yourself
    var html = template(data);
    dataContainer.html(html);
  }
})