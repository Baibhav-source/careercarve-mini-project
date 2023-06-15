$(function () {
  $(".wrapper").sortable();
  $(".menu-icon").draggable({
    connectToSortable: ".wrapper",
    helper: "clone",
    revert: "invalid",
  });
  $(".sec1").disableSelection();
});
