/* 点击图片显示照片*/
  function showModal(image) {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modal-image");
  modal.style.display = "block"; //使得元素在页面上能展现出来
  modalImage.src = image.src;
}
  function hideModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none"; //将元素隐藏
}
