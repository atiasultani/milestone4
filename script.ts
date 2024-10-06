const form = document.getElementById("form1") as HTMLFormElement;
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //image upload
  const pic = document.getElementById("Image") as HTMLInputElement;
  pic.addEventListener("change", (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const img = document.getElementById(
          "im_dp"
        ) as HTMLImageElement;
        img.src = e.target!.result as string;
        img.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  // calling the html tags and its values

  const name = document.getElementById("name") as HTMLInputElement;
  const nameFull = name.value;

  //get radio button data
  const genderValue = document.querySelector(
    'input[name="gender"]:checked'
  ) as HTMLInputElement;
  const genderV = genderValue.value;
  const country = document.getElementById("nationality") as HTMLInputElement;
  const nationality = country.value;

  const ph = document.getElementById("phone") as HTMLInputElement;
  const phone = ph.value;

  const mail = document.getElementById("email") as HTMLInputElement;
  const email = mail.value;

  const expe = document.getElementById("exp") as HTMLTextAreaElement;
  const experience = expe.value;

  const ms = document.getElementById("master") as HTMLInputElement;
  const master = ms.value;

  const gradu = document.getElementById("graduation") as HTMLInputElement;
  const graduation = gradu.value;

  const hSC = document.getElementById("hsc") as HTMLInputElement;
  const hsc = hSC.value;

  const sSC = document.getElementById("ssc") as HTMLInputElement;
  const ssc = sSC.value;

  const other = document.getElementById("others") as HTMLInputElement;
  const others = other.value;

  const atri = document.getElementById("attri") as HTMLTextAreaElement;
  const attributes = atri.value;

  const skill = document.getElementById("skills") as HTMLTextAreaElement;
  const skills = skill.value;

  // make final result

  const resultfinal = `
      <div id="img">${pic}</div>
      <h1 id="main-heading" > Editable Resume </h1>
      <hr>
      <h1> Personal Information </h1>

      <b>Name : <p contenteditable="true">${nameFull} </p> </b>
    <br />
  
    <b>Gender : <p contenteditable="true"> ${genderV} </p></b>   
    
    <br /> 
    <b>Nationality:<p contenteditable="true">${nationality} </p></b>
    <br />

     <b>Phone no : <p contenteditable="true">${phone} </p></b>
      <br />
      <b>E-mail : <p contenteditable="true"> ${email} </p></b>
      <br />
      <hr>

      <h1> Experience </h1>
      <b contenteditable="true"> ${experience} </b>

      <hr>

      <h1> Academic Education </h1>
      <b> Master :  <p contenteditable="true"> ${master} </p></b>
      <br />
      <b> Graduation : <p contenteditable="true"> ${graduation} </p> </b>
      <br />
      <b>H.S.C: <p contenteditable="true"> ${hsc} </p></b>
      <br />
      <b>S.S.C : <p contenteditable="true">${ssc} </p></b>
      <br />
      <b>Others: <p contenteditable="true">${others} </p> </b>

      <hr>

      <h1> Attributes </h1>
      <b contenteditable="true"> ${attributes} </b>
      
      <hr>

      <h1> Skills </h1>
      
      <b contenteditable="true"> ${skills} </b>`;


  const result = document.getElementById("output") as HTMLDataElement;
  result.innerHTML = resultfinal;

  if (result.innerHTML == resultfinal) {
    console.log(result);
  } else {
    console.log("try again");
  }
});
