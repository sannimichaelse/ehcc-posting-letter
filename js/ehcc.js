document.getElementById("submitBtn").addEventListener("click", () => {

    let name = document.getElementById("name").value;
    let dot = document.getElementById("dot").value;
    let doe = document.getElementById("doe").value;
    let department = document.getElementById("department");
    let directorate = document.getElementById("directorate");
    let lovecircle = document.getElementById("lovecircle");
    let gender = document.getElementById('gender');
    let headOfDepartment = findDepartmentLeader(department.options[department.selectedIndex].text);
    let headOfDirectorate = findDirectorateLeader(directorate.options[directorate.selectedIndex].text);
    let loveCircleDetails = getLoveCircleDetailsByArea(lovecircle.options[lovecircle.selectedIndex].text);

    if (!name || !dot || !doe || gender.options.length == 0) {
        alert("PLEASE FILL ALL FIELDS")
        return;
    }

    console.log(gender.options[gender.selectedIndex].value)
    if (gender.options[gender.selectedIndex].value == "m") {
        localStorage.setItem("gender", "Sir");
    } else {
        localStorage.setItem("gender", "Ma");
    }

    //console.log(loveCircleDetails)
    localStorage.setItem("dot", dot);
    localStorage.setItem("doe", doe);
    localStorage.setItem("name", name);
    localStorage.setItem("headOfDepartment", headOfDepartment);
    localStorage.setItem("headOfDirectorate", headOfDirectorate);
    localStorage.setItem("department", department.options[department.selectedIndex].text);
    localStorage.setItem("directorate", directorate.options[directorate.selectedIndex].text);
    localStorage.setItem("loveCircleArea", lovecircle.options[lovecircle.selectedIndex].text);
    localStorage.setItem("loveCircleAddress", loveCircleDetails.address);
    localStorage.setItem("loveCirclePhone", loveCircleDetails.phone);
    localStorage.setItem("loveCircleLeader", loveCircleDetails.name);

    window.location.href = "ehcc.html";

})

const loveCircleObject = [
    {
        name: "Min Nifemi & Mrs Ebunlomo Oguntoye",
        area: "BERGER",
        address: "29, Hassan Abiodun street, Ojodu, Berger",
        phone: "08035181304."
    },
    {
        name: "Mr Kolade Adepoju",
        area: "OMOLE PHASE 1",
        address: "328A, Adeyemo Akapo, Omole Phase 1, Ikeja",
        phone: "08069826492"
    },
    {
        name: "Mr & Mrs Mayokun Omotoso",
        area: "GRAMMAR SCHOOL",
        address: "Flat 12, 2/4 Ropo Owolabi Street, Morgan Estate Phase 2, Ojodu",
        phone: "07056236378"
    },
    {
        name: "Mr & Mrs Sola Kolawole",
        area: "ABULE EGBA",
        address: "24, Kofoworola Street, U-turn b/stop, Abule-egba",
        phone: "08032219727"
    },
    {
        name: "Mr & Mrs Tunde Obisesan",
        area: "SURULERE",
        address: "24, Lawanson Road, Surulere, lagos",
        phone: "08038662221"
    },
    {
        name: "Mr & Mrs Rotimi Adedoyin",
        area: "APAPA",
        address: "20B point road, Apapa",
        phone: "08137760275"
    },
    {
        name: "Mr & Mrs Gboyega Hassan",
        area: "ALAKUKO",
        address: "2, Alabi Street, Off Fola Azeez, Alakuko",
        phone: "07056236378"
    },
    {
        name: "Mr & Mrs Kenedy Oboh",
        area: "KETU",
        address: "4, Alhaji Tajudeen crescent off Ajibola Street Alapere Ketu",
        phone: "08028871244"
    },
    {
        name: "Mr & Mrs Jide Olaleye",
        area: "OKOTA",
        address: "2, Reverend Father Burke Crescent, Off ago palace way, Okota",
        phone: "07058112575"
    },
    {
        name: "Mr & Mrs Olayinka Koyejo",
        area: "OGBA",
        address: "5, Celestial Avenue, Powerline, Oke-ira, Ogba",
        phone: "08032000165"
    },
    {
        name: "Mr & Mrs Olaleye",
        area: "OWODE EGBA",
        address: "Somide Estate, Flat 3. Along Balufe Village, Obafemi Owode LG.",
        phone: "07036844844"
    },
    {
        name: "Mr & Mrs Ibukun Fagbeyiro",
        area: "OSHODI",
        address: "6, Oba Elewu way, Beesam international Airport, Mafoluku, Oshodi",
        phone: "08062438953"
    },
    {
        name: "Mr & Mrs Tope Somoye",
        area: "IDIMU",
        address: "22, Alhaji Adewale Street, Idimu Council",
        phone: "08034383943"
    },
    {
        name: "Mrs Omonike Abati",
        area: "MOWE",
        address: "Olorunsogo Estate, Mowe",
        phone: "07033737535"
    },
    {
        name: "Mr & Mrs Olumide Dickson",
        area: "AJAH",
        address: "5, Kekere Ekun Street, Badore, Ajah",
        phone: "08036461497"
    },
    {
        name: "Mr & Mrs Fisayo Ola",
        area: "IJU ISHAGA",
        address: "2, Famurewa Close, Off Victor Olaleye Street, Iju-Ishaga.",
        phone: "08034774796"
    },
    {
        name: "Mr & Mrs Dipo Salako",
        area: "GBAGADA",
        address: "15, Onasanya Street, Ifako, Gbagada",
        phone: "07033162200"
    }
]

const directorateObject = [
    {
        name: "ADMINISTRATION DIRECTORATE",
        head: "Minister Toba Oluwapomile",
        headOfDirectoratePhone: "08060194260",
        deputy: "Miss Stella Ogundipe",
        gender: "m",
        departments: [
            {
                name: "TRAINING DEPARTMENT",
                head: "Mrs Stella Ogundipe",
                gender: "f",
                headOfDepartmentPhone: "07064272239",
                deputy: "Mr. Tunde Obisesan "
            },
            {
                name: "INFORMATION SYSTEMS DEPARTMENT",
                head: "Mr. Wale Onifade",
                gender: "m",
                headOfDepartmentPhone: "08063020238",
                deputy: "Mr. Tosin Oguntegbe"
            },
            {
                name: "EDITORIAL DEPARTMENT",
                head: "Mrs Tomi Fadoju",
                gender: "f",
                headOfDepartmentPhone: "08128921465",
                deputy: "Miss Olanrewaju Adekunle"
            }
        ],
    },
    {
        name: "MEMBERSHIP DIRECTORATE",
        head: "Min. Doyin Kolawole",
        headOfDirectoratePhone: "08165275623",
        deputy: "Mr. Ibukun Fagbeyiro",
        gender: "m",
        departments: [
            {
                name: "PROTOCOL DEPARTMENT",
                head: "Mr. Ibukun Fagbeyiro",
                gender: "m",
                headOfDepartmentPhone: "08062438953",
                deputy: "Mr. Gbenga Paul"
            },
            {
                name: "USHERING DEPARTMENT",
                head: "Mrs Adedayo Olufemi",
                gender: "f",
                headOfDepartmentPhone: "08055384847",
                deputy: "Mr Rotimi Adedoyin"
            },
            {
                name: "GREETERS DEPARTMENT",
                head: "Mrs. Ebunlomo Oguntoye",
                gender: "f",
                headOfDepartmentPhone: "08069782421",
                deputy: "Mr Yinka Koyejo"
            },
            {
                name: "SECURITY DEPARTMENT",
                head: "Mr. Tayo Olatayo",
                gender: "m",
                headOfDepartmentPhone: "08033157504",
                deputy: "Mr. Adeolu Lala"
            },
            {
                name: "ASSIMILATION DEPARTMENT",
                head: "Mrs. Abimbola Oluwaponmile ",
                gender: "f",
                headOfDepartmentPhone: "08138893397",
                deputy: "Miss Yvonne Asemota"
            },
            {
                name: "CALL CENTRE DEPARTMENT",
                head: "Mr Olumide Dickson",
                gender: "m",
                headOfDepartmentPhone: "08036461497",
                deputy: "Miss Mirabel Samuel"
            }
        ],
    },
    {
        name: "WELFARE DIRECTORATE",
        head: "Min. Ololade Hassan",
        headOfDirectoratePhone: "07036032729",
        deputy: "Mrs. Torera Jide-Olaleye",
        gender: "m",
        departments: [
            {
                name: "CARE DEPARTMENT",
                head: "Mrs. Wunmi Fagbeyiro",
                gender: "f",
                headOfDepartmentPhone: "07068253608",
                deputy: "Mrs. Doyin Dickson "
            },
            {
                name: "CHILDREN DEPARTMENT",
                head: "Mrs. Torera Jide-Olaleye ",
                gender: "f",
                headOfDepartmentPhone: "08030738000",
                deputy: "Mrs. Motolani Somoye"
            },
            {
                name: "TUCK SHOP DEPARTMENT",
                head: "Mrs Ayobami Lala",
                gender: "f",
                headOfDepartmentPhone: "08105412151",
                deputy: "Mrs Tomisin Ogunjobi"
            },
            {
                name: "CRECHE DEPARTMENT",
                head: "Mrs. Funmi Omotoso",
                gender: "f",
                headOfDepartmentPhone: "07061571043",
                deputy: "Miss Nkiruka Brown"
            },
            {
                name: "FACILITY MANAGEMENT DEPARTMENT",
                head: "Mr. Femi Patrick Kupoluyi",
                gender: "m",
                headOfDepartmentPhone: "08088917586",
                deputy: "Mr Yinka Lawal"
            },
            {
                name: "STAGE MANAGEMENT DEPARTMENT",
                head: "Mr. Mayowa Aderogbin",
                gender: "m",
                headOfDepartmentPhone: "08056849502",
                deputy: "Mr Gboyega Atanda"
            },
            {
                name: "LOVE-IN-ACTION DEPARTMENT",
                head: "Mr Seun Okeyanju",
                gender: "m",
                headOfDepartmentPhone: "08038333703",
                deputy: "Miss Lolade Aderinto"
            },
            {
                name: "WELFARE DEPARTMENT",
                head: "Miss Doris Adebayo",
                gender: "f",
                headOfDepartmentPhone: "07060584030",
                deputy: "Miss Kemi Kupoluyi"
            }
        ]
    },
    {
        name: "WORSHIP DIRECTORATE",
        head: "Pst. Shola Lawal",
        headOfDirectoratePhone: "08067115436",
        deputy: "Mr Tomisin Kehinde",
        gender: "m",
        departments: [
            {
                name: "CHOIR DEPARTMENT",
                head: "Pst. Shola Lawal",
                gender: "m",
                headOfDepartmentPhone: "08067115436",
                deputy: "Mr. Tomisin Kehinde"
            },
            {
                name: "DRAMA DEPARTMENT",
                head: "Mr. Olumide Jesumuyiwa ",
                gender: "m",
                headOfDepartmentPhone: "08162760891",
                deputy: "Mr Micheal Ogunbo"
            },
            {
                name: "DANCE DEPARTMENT",
                head: "Mr. Malachi Alozie",
                gender: "m",
                headOfDepartmentPhone: "08166967976",
                deputy: "Mr Babatunde Tiamiyu"
            }
        ]
    },
    {
        name: "OUTREACHES DIRECTORATE",
        head: "Min. Biola Dada",
        headOfDirectoratePhone: "07038616699",
        deputy: "Mr. Sola Kolawole",
        gender: "m",
        departments: [
            {
                name: "MARKETING COMMUNICATIONS DEPARTMENT",
                head: "Mr Sola Kolawole",
                gender: "m",
                headOfDepartmentPhone: "08032219727",
                deputy: "Mr Wale Ogunjobi"
            },
            {
                name: "PUBLICITY",
                head: "Mr Kolade Adepoju",
                gender: "m",
                headOfDirectoratePhone: "07036294055",
                deputy: "Mr Ojo Ebenezer"
            },
            {
                name: "CAMPUS OUTREACHES DEPARTMENT",
                head: "Mr. Olalekan Oluwatoba.",
                gender: "m",
                headOfDepartmentPhone: "08037237259",
                deputy: "Mr. Tosin Ogunmade "
            },
            {
                name: "SOCIAL MEDIA DEPARTMENT",
                head: "Mrs Dayo Olufemi",
                gender: "f",
                headOfDepartmentPhone: "08055384847",
                deputy: "Mr Ademola Adetona"
            },
            {
                name: "DOME DEPARTMENT",
                head: "Mrs Maryanne Onifade",
                gender: "f",
                headOfDepartmentPhone: "07034442330",
                deputy: "Mrs Cecilia Olaleye"
            },
            {
                name: "TRANSPORTATION AND LOGISTICS DEPARTMENT",
                head: "Mr. Tade Okewole",
                gender: "m",
                headOfDepartmentPhone: "08038317289",
                deputy: "Mr Jide Olaleye "
            }
        ]
    },
    {
        name: "EDIFICATION DIRECTORATE",
        head: "Min. Bolanle Dada",
        headOfDirectoratePhone: "07035495135",
        deputy: "Mrs Tomi Fadoju",
        gender: "m",
        departments: [
            {
                name: "TABERNACLE OF DAVID DEPARTMENT",
                head: "Mrs Bolanle Dada. ",
                gender: "f",
                headOfDepartmentPhone: "07035495135",
                deputy: ""
            },
            {
                name: "C.O.D Coordinator",
                head: "Mrs Tomi Fadoju.",
                gender: "f",
                headOfDepartmentPhone: "08128921465",
                deputy: "Mr Timileyin Agbeyo"
            },
            {
                name: "INTERCESSORY DEPARTMENT",
                head: "Mr Gboyega Hassan",
                gender: "m",
                headOfDepartmentPhone: "07056236378",
                deputy: "Mr. Joseph Sanni"
            },
            {
                name: "CAREER DEVELOPMENT DEPARTMENT",
                head: "Miss Shola Orimoloye",
                gender: "f",
                headOfDepartmentPhone: "08160006061",
                deputy: "Miss Princess Ubong"
            },
            {
                name: "WOMEN FORUM DEPARTMENT",
                head: "Mrs Ibukun Adedoyin",
                gender: "f",
                headOfDepartmentPhone: "08022611261",
                deputy: "Mrs Bukola Obisesan"
            },
            {
                name: "MEN FORUM DEPARTMENT",
                head: "Mr. Daniel Olufemi",
                gender: "m",
                headOfDepartmentPhone: "07039601010",
                deputy: "Kennedy Oboh"
            }
        ]
    },
    {
        name: "TECHNOLOGY DIRECTORATE",
        head: "Min. Gbenga Folarin",
        headOfDirectoratePhone: "08089773815",
        deputy: "Mr. Ayodeji Gregory",
        gender: "m",
        departments: [
            {
                name: "VIDEO AND PHOTOGRAPHY DEPARTMENT",
                head: "Mr Wale Akadiri",
                gender: "m",
                headOfDepartmentPhone: "08169416249",
                deputy: "Mr Niran Adesanya"
            },
            {
                name: "TECHNICAL DEPARTMENT",
                head: "Mr Fisayo Ola",
                gender: "m",
                headOfDepartmentPhone: "08034774796",
                deputy: "Mr Omolade Akinbode"
            },
            {
                name: "MULTIMEDIA DEPARTMENT",
                head: "Mr Fadoju Olakunle",
                gender: "m",
                headOfDepartmentPhone: "07062182179",
                deputy: "Mr Lasisi Damilare"
            },
            {
                name: "MEDIA PRODUCTION DEPARTMENT",
                head: "Mr Ayodeji Gregory",
                gender: "m",
                headOfDepartmentPhone: "08167225755",
                deputy: "Mr Tiamiyu Adeyinka"
            }
        ]
    },
    {
        name: "SMALL GROUPS DIRECTORATE",
        head: "Min. Nifemi Oguntoye",
        headOfDirectoratePhone: "08035181304",
        deputy: "Mr Dipo Salako",
        gender: "m",
        departments: [
            {
                name: "SMALL GROUPS DEPARTMENT",
                head: "Mr Dipo Salako",
                gender: "m",
                headOfDepartmentPhone: "07033162200",
                deputy: "Mrs Tunrayo Koyejo"
            },
            {
                name: "LAGOS DEPARTMENT",
                head: "Miss Toyosi Akinola",
                gender: "f",
                headOfDepartmentPhone: "08075436691",
                deputy: "Mrs Rachael Salako"
            }
        ]
    }
]

let department = document.getElementById("department");
let directorate = document.getElementById("directorate");
let lovecircle = document.getElementById("lovecircle");

const loadDepartments = () => {
    let selectedDirectorate = directorate.options[directorate.selectedIndex].text;
    if (selectedDirectorate != "Select Directorate") {
        findDepartmentByDirectorate(selectedDirectorate)
    } else {
        department.innerHTML = "";
    }
}

const getLoveCircleDetailsByArea = (area) => {
    for (let s = 0; s < loveCircleObject.length; s++) {
        if (loveCircleObject[s].area == area) {
            return loveCircleObject[s];
        }
    }
}

const findDepartmentLeader = (department) => {
    for (let i = 0; i < directorateObject.length; i++) {
        const dep = directorateObject[i].departments;
        for (let j = 0; j < dep.length; j++) {
            //console.log(dep[j].head)
            if (dep[j].name == department) {
                //console.log(dep[j].head)
                localStorage.setItem("headOfDepartmentGender", dep[j].gender);
                return dep[j].head + " (" + dep[j].headOfDepartmentPhone + ")";;
            }
        }
    }
}

const findDirectorateLeader = (directorate) => {
    for (let i = 0; i < directorateObject.length; i++) {
        const name = directorateObject[i].name;
        if (directorate == name) {
            return directorateObject[i].head + " (" + directorateObject[i].headOfDirectoratePhone + ")";
        }
    }
}

const findDepartmentByDirectorate = (depart) => {
    department.innerHTML = "";
    for (let i = 0; i < directorateObject.length; i++) {
        if (directorateObject[i].name == depart) {
            const dep = directorateObject[i].departments;
            for (let j = 0; j < dep.length; j++) {
                department.options[department.options.length] = new Option(dep[j].name, j);
            }
        }
    }
}


for (let k = 0; k < directorateObject.length; k++) {
    directorate.options[directorate.options.length] = new Option(directorateObject[k].name, k);
}

for (let s = 0; s < loveCircleObject.length; s++) {
    lovecircle.options[lovecircle.options.length] = new Option(loveCircleObject[s].area, s);
}
