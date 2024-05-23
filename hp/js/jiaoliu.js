/* 获取填写表格内容*/
function submitForm() {
  var name = document.getElementById("name");
  var contact = document.getElementById("contact");
  var theme = document.getElementById("theme");
  var favorite_character = document.getElementById("favorite_character");
  var music_quality = document.getElementById("music_quality");
  var textarea = document.getElementById("textarea");

/* 判断表格内容规范*/
  if (name.value === "" || contact.value === "" || theme.value === "" || favorite_character.value === "" || music_quality.value === "" || textarea.value === "") {
    alert("请填写完整"); //通过这种条件判断的方式将某些选项变为必选项
    return false;
  } else {
    alert("提交成功");
    return true;
  }
}

/* 表格按钮操作*/
function resetForm() {
  if (confirm("是否要重置表单？")) {
    alert("表单已重置");
  } else {
    alert("取消重置");
  }
}
function clearForm() {
  if (confirm("是否要清空表单？")) {
    alert("表单已清空");
  } else {
    alert("取消清空");
  }
}
