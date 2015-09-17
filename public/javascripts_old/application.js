// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function toggleDetails(id)
{
  document.getElementById("booking_item_" + id).style.display = document.getElementById("booking_item_" + id).style.display=="none"?"":"none";
  document.getElementById("booking_item_more_" + id).style.display = document.getElementById("booking_item_more_" + id).style.display=="none"?"":"none";
  document.getElementById("booking_item_less_" + id).style.display = document.getElementById("booking_item_less_" + id).style.display=="none"?"":"none";
}

function remove_fields(link)
{
  $(link).previous("input[type=hidden]").value = "1";
  $(link).up(".fields").hide();
}

function add_fields(link, association, content) 
{
  var new_id = new Date().getTime();
  var regexp = new RegExp("new_" + association, "g")
  $(link).up().insert({
    before: content.replace(regexp, new_id)
  });
}