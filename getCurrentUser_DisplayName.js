<script src="/SiteAssets/jquery.SPServices-2013.02a.js" type="text/javascript"></script>
<script src="/SiteAssets/jquery.js" type="text/javascript"></script>

<script type="text/javascript">
  var userid= _spPageContextInfo.userId;
  var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
  var requestHeaders = { "accept" : "application/json;odata=verbose" };
  $.ajax({
    url : requestUri,
    contentType : "application/json;odata=verbose",
    headers : requestHeaders,
    success : onSuccess,
    error : onError
  });

  function onSuccess(data, request){
    var loginName = data.d.Title;
    alert(loginName);
  }

  function onError(error) {
    alert("error");
  }
</script>