// on start
route('*', function ()
{


}).once(function()
{

  runDataResponse();
  runInputFileFunc();
  responsiveSidebar();
  setLanguageURL();

});


