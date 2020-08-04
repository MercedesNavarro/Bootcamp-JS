var image,
    firstName,
    lastName,
    update,
    refresh;

image = document.getElementById("image");
firstName = document.getElementById("first-name");
lastName = document.getElementById("last-name");
update = document.getElementById("update");
refresh = document.getElementById("refresh");

update.addEventListener("click", function(){
    image.src = "https://www.pngitem.com/pimgs/m/22-223925_female-avatar-female-avatar-no-face-hd-png.png";
    firstName.value = "Merce";
    lastName.value = "Navarro";

    console.log(`${firstName.value} ${lastName.value}`);

});

refresh.addEventListener("click", function(){
    image.src = "";
    firstName.value = "";
    lastName.value = "";

});


