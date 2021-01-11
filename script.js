$("#myId").text("Hello World");

$("a").attr({
    "href": "https://learn.jquery.com/using-jquery-core/attributes/",
    "title": "lien"
}).text("lien");

$("#trois").width("300px").height("300px");

$("#trois div:nth-child(2)").text("text");

alert("Le première index d'un tableau commence toujours par: " + $("#trois div:first").index());