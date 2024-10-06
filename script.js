var form = document.getElementById("form1");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //image upload
    var pic = document.getElementById("Image");
    pic.addEventListener("change", function (event) {
        var input = event.target;
        var file = input.files ? input.files[0] : null;
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var img = document.getElementById("im_dp");
                img.src = e.target.result;
                img.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });
    // calling the html tags and its values
    var name = document.getElementById("name");
    var nameFull = name.value;
    //get radio button data
    var genderValue = document.querySelector('input[name="gender"]:checked');
    var genderV = genderValue.value;
    var country = document.getElementById("nationality");
    var nationality = country.value;
    var ph = document.getElementById("phone");
    var phone = ph.value;
    var mail = document.getElementById("email");
    var email = mail.value;
    var expe = document.getElementById("exp");
    var experience = expe.value;
    var ms = document.getElementById("master");
    var master = ms.value;
    var gradu = document.getElementById("graduation");
    var graduation = gradu.value;
    var hSC = document.getElementById("hsc");
    var hsc = hSC.value;
    var sSC = document.getElementById("ssc");
    var ssc = sSC.value;
    var other = document.getElementById("others");
    var others = other.value;
    var atri = document.getElementById("attri");
    var attributes = atri.value;
    var skill = document.getElementById("skills");
    var skills = skill.value;
    // make final result
    var resultfinal = "\n      <div id=\"img\">".concat(pic, "</div>\n      <h1 id=\"main-heading\" > Editable Resume </h1>\n      <hr>\n      <h1> Personal Information </h1>\n\n      <b>Name : <p contenteditable=\"true\">").concat(nameFull, " </p> </b>\n    <br />\n  \n    <b>Gender : <p contenteditable=\"true\"> ").concat(genderV, " </p></b>   \n    \n    <br /> \n    <b>Nationality:<p contenteditable=\"true\">").concat(nationality, " </p></b>\n    <br />\n\n     <b>Phone no : <p contenteditable=\"true\">").concat(phone, " </p></b>\n      <br />\n      <b>E-mail : <p contenteditable=\"true\"> ").concat(email, " </p></b>\n      <br />\n      <hr>\n\n      <h1> Experience </h1>\n      <b contenteditable=\"true\"> ").concat(experience, " </b>\n\n      <hr>\n\n      <h1> Academic Education </h1>\n      <b> Master :  <p contenteditable=\"true\"> ").concat(master, " </p></b>\n      <br />\n      <b> Graduation : <p contenteditable=\"true\"> ").concat(graduation, " </p> </b>\n      <br />\n      <b>H.S.C: <p contenteditable=\"true\"> ").concat(hsc, " </p></b>\n      <br />\n      <b>S.S.C : <p contenteditable=\"true\">").concat(ssc, " </p></b>\n      <br />\n      <b>Others: <p contenteditable=\"true\">").concat(others, " </p> </b>\n\n      <hr>\n\n      <h1> Attributes </h1>\n      <b contenteditable=\"true\"> ").concat(attributes, " </b>\n      \n      <hr>\n\n      <h1> Skills </h1>\n      \n      <b contenteditable=\"true\"> ").concat(skills, " </b>");
    var result = document.getElementById("output");
    result.innerHTML = resultfinal;
    if (result.innerHTML == resultfinal) {
        console.log(result);
    }
    else {
        console.log("try again");
    }
});
