let formMenu = document.getElementById("inputForm");
            formMenu.style.display="none";

            function editForm() {
                if (formMenu.style.display === "none") {
                    formMenu.style.display = "block";
                    
                }else{
                    formMenu.style.display = "none";
                }

                let name = document.getElementById("pName").innerHTML;
                let role = document.getElementById("pRole").innerHTML;
                let availability = document.getElementById("pAvailable").innerHTML;
                let usia = document.getElementById("pAge").innerHTML;
                let location = document.getElementById("pLocation").innerHTML;
                let exp = document.getElementById("pExp").innerHTML;
                let email = document.getElementById("pEmail").innerHTML;

                document.getElementById("inpName").value=name;
                document.getElementById("inpRole").value=role;
                document.getElementById("inpAvai").value = availability;
                document.getElementById("inpUsia").value = usia;
                document.getElementById("inpLocation").value = location;
                document.getElementById("inpExp").value = exp;
                document.getElementById("inpEmail").value = email;


            }

            function simpanForm() {
                formMenu.style.display = "none";
                let name = document.getElementById('inpName').value;
                let role = document.getElementById("inpRole").value;
                let availability = document.getElementById("inpAvai").value;
                let usia = document.getElementById("inpUsia").value;
                let location = document.getElementById("inpLocation").value;
                let exp = document.getElementById("inpExp").value;
                let email = document.getElementById("inpEmail").value;

                document.getElementById('pName').innerHTML= name;
                document.getElementById("pRole").innerHTML = role;
                document.getElementById("pAvailable").innerHTML = availability;
                document.getElementById("pAge").innerHTML = usia;
                document.getElementById("pLocation").innerHTML= location;
                document.getElementById("pExp").innerHTML = exp;
                document.getElementById("pEmail").innerHTML= email;
            }


            function showMenu(){
                let menu = document.getElementById("menu");
                let box = document.getElementById("box-profile");

                if (menu.style.display === "block") {
                    menu.style.display = "none";
                    box.style.padding = "0px"
                    
                } else {
                    menu.style.display= "block";
                    box.style.paddingTop = "125px"
                    
                }
            }