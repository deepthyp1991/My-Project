function submitForm(){
  var form = document.getElementsByTagName('form')[0]
  form.submit();
  form.reset();
  alert("Message submited Successfully")
  return false;
}


