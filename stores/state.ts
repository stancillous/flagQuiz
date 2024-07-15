import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://flagquiz.botontapwater.tech",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const gameStore = defineStore("game_store", {
  state: () => ({
    currentTab: "getUsername",
    userScore: 0,
    userName: "",
    currentQuestionIndex: 0 /**keep track of the current question to be shown to the user */,
    timeLeft: 15 /**duration of the quiz before it ends */,
    flagQuestions: null,
    data: {
      questions: [
        {
          question: {
            answer: "Mayotte",
            flag_url: "https://flagcdn.com/w320/yt.png",
          },
          choices: ["British Virgin Islands", "Iran", "Mayotte"],
        },
        {
          question: {
            answer: "Spain",
            flag_url: "https://flagcdn.com/w320/es.png",
          },
          choices: ["Spain", "Libya", "Dominican Republic"],
        },
        {
          question: {
            answer: "Japan",
            flag_url: "https://flagcdn.com/w320/jp.png",
          },
          choices: ["Tuvalu", "Republic of the Congo", "Japan"],
        },
        {
          question: {
            answer: "Iceland",
            flag_url: "https://flagcdn.com/w320/is.png",
          },
          choices: ["British Indian Ocean Territory", "Iceland", "Niger"],
        },
        {
          question: {
            answer: "Saudi Arabia",
            flag_url: "https://flagcdn.com/w320/sa.png",
          },
          choices: ["India", "Moldova", "Saudi Arabia"],
        },
        {
          question: {
            answer: "Dominica",
            flag_url: "https://flagcdn.com/w320/dm.png",
          },
          choices: ["Hungary", "Italy", "Dominica"],
        },
        {
          question: {
            answer: "Saint Lucia",
            flag_url: "https://flagcdn.com/w320/lc.png",
          },
          choices: ["Saint Lucia", "Vanuatu", "New Zealand"],
        },
        {
          question: {
            answer: "Macau",
            flag_url: "https://flagcdn.com/w320/mo.png",
          },
          choices: ["Eswatini", "Macau", "Japan"],
        },
        {
          question: {
            answer: "South Georgia",
            flag_url: "https://flagcdn.com/w320/gs.png",
          },
          choices: ["South Georgia", "Singapore", "British Virgin Islands"],
        },
        {
          question: {
            answer: "Libya",
            flag_url: "https://flagcdn.com/w320/ly.png",
          },
          choices: ["South Korea", "Libya", "United States Virgin Islands"],
        },
        {
          question: {
            answer: "São Tomé and Príncipe",
            flag_url: "https://flagcdn.com/w320/st.png",
          },
          choices: ["Pitcairn Islands", "Réunion", "São Tomé and Príncipe"],
        },
        {
          question: {
            answer: "Guadeloupe",
            flag_url: "https://flagcdn.com/w320/gp.png",
          },
          choices: ["Guadeloupe", "Tunisia", "Bahamas"],
        },
        {
          question: {
            answer: "Jamaica",
            flag_url: "https://flagcdn.com/w320/jm.png",
          },
          choices: [
            "Jamaica",
            "Saint Helena, Ascension and Tristan da Cunha",
            "Saudi Arabia",
          ],
        },
        {
          question: {
            answer: "Egypt",
            flag_url: "https://flagcdn.com/w320/eg.png",
          },
          choices: ["Egypt", "Colombia", "Brunei"],
        },
        {
          question: {
            answer: "Jordan",
            flag_url: "https://flagcdn.com/w320/jo.png",
          },
          choices: ["Chile", "Jordan", "Rwanda"],
        },
        {
          question: {
            answer: "Bermuda",
            flag_url: "https://flagcdn.com/w320/bm.png",
          },
          choices: ["Germany", "Cuba", "Bermuda"],
        },
        {
          question: {
            answer: "Faroe Islands",
            flag_url: "https://flagcdn.com/w320/fo.png",
          },
          choices: ["Faroe Islands", "Hong Kong", "French Guiana"],
        },
        {
          question: {
            answer: "Mexico",
            flag_url: "https://flagcdn.com/w320/mx.png",
          },
          choices: ["Mexico", "Christmas Island", "Falkland Islands"],
        },
        {
          question: {
            answer: "Saint Barthélemy",
            flag_url: "https://flagcdn.com/w320/bl.png",
          },
          choices: ["Cape Verde", "Norfolk Island", "Saint Barthélemy"],
        },
        {
          question: {
            answer: "Kiribati",
            flag_url: "https://flagcdn.com/w320/ki.png",
          },
          choices: ["Kiribati", "Panama", "American Samoa"],
        },
        {
          question: {
            answer: "Slovenia",
            flag_url: "https://flagcdn.com/w320/si.png",
          },
          choices: ["Uganda", "Luxembourg", "Slovenia"],
        },
        {
          question: {
            answer: "Saint Martin",
            flag_url: "https://flagcdn.com/w320/mf.png",
          },
          choices: ["Cayman Islands", "Ivory Coast", "Saint Martin"],
        },
        {
          question: {
            answer: "Afghanistan",
            flag_url:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
          },
          choices: ["Afghanistan", "Turkmenistan", "Colombia"],
        },
        {
          question: {
            answer: "Sweden",
            flag_url: "https://flagcdn.com/w320/se.png",
          },
          choices: ["Monaco", "Sweden", "Iceland"],
        },
        {
          question: {
            answer: "Armenia",
            flag_url: "https://flagcdn.com/w320/am.png",
          },
          choices: ["São Tomé and Príncipe", "Tuvalu", "Armenia"],
        },
        {
          question: {
            answer: "Mauritania",
            flag_url: "https://flagcdn.com/w320/mr.png",
          },
          choices: ["Qatar", "Djibouti", "Mauritania"],
        },
        {
          question: {
            answer: "Chile",
            flag_url: "https://flagcdn.com/w320/cl.png",
          },
          choices: ["Sudan", "Moldova", "Chile"],
        },
        {
          question: {
            answer: "Hungary",
            flag_url: "https://flagcdn.com/w320/hu.png",
          },
          choices: ["Guatemala", "Hungary", "Bulgaria"],
        },
        {
          question: {
            answer: "Croatia",
            flag_url: "https://flagcdn.com/w320/hr.png",
          },
          choices: ["Croatia", "Vietnam", "Gabon"],
        },
        {
          question: {
            answer: "Gibraltar",
            flag_url: "https://flagcdn.com/w320/gi.png",
          },
          choices: ["Malaysia", "Czechia", "Gibraltar"],
        },
        {
          question: {
            answer: "Serbia",
            flag_url: "https://flagcdn.com/w320/rs.png",
          },
          choices: ["Nepal", "Croatia", "Serbia"],
        },
        {
          question: {
            answer: "Venezuela",
            flag_url: "https://flagcdn.com/w320/ve.png",
          },
          choices: ["Venezuela", "Liechtenstein", "Cocos (Keeling) Islands"],
        },
        {
          question: {
            answer: "Barbados",
            flag_url: "https://flagcdn.com/w320/bb.png",
          },
          choices: ["Somalia", "Mayotte", "Barbados"],
        },
        {
          question: {
            answer: "El Salvador",
            flag_url: "https://flagcdn.com/w320/sv.png",
          },
          choices: ["Isle of Man", "Saint Pierre and Miquelon", "El Salvador"],
        },
        {
          question: {
            answer: "Zimbabwe",
            flag_url: "https://flagcdn.com/w320/zw.png",
          },
          choices: ["Zimbabwe", "Azerbaijan", "Ecuador"],
        },
        {
          question: {
            answer: "Belarus",
            flag_url: "https://flagcdn.com/w320/by.png",
          },
          choices: ["South Africa", "Gibraltar", "Belarus"],
        },
        {
          question: {
            answer: "Saint Vincent and the Grenadines",
            flag_url: "https://flagcdn.com/w320/vc.png",
          },
          choices: [
            "Barbados",
            "Turkmenistan",
            "Saint Vincent and the Grenadines",
          ],
        },
        {
          question: {
            answer: "Angola",
            flag_url: "https://flagcdn.com/w320/ao.png",
          },
          choices: ["Tokelau", "Bermuda", "Angola"],
        },
        {
          question: {
            answer: "Fiji",
            flag_url: "https://flagcdn.com/w320/fj.png",
          },
          choices: ["Australia", "Cayman Islands", "Fiji"],
        },
        {
          question: {
            answer: "Seychelles",
            flag_url: "https://flagcdn.com/w320/sc.png",
          },
          choices: ["Seychelles", "Philippines", "United States"],
        },
        {
          question: {
            answer: "Norway",
            flag_url: "https://flagcdn.com/w320/no.png",
          },
          choices: ["Norway", "Timor-Leste", "Rwanda"],
        },
        {
          question: {
            answer: "Lebanon",
            flag_url: "https://flagcdn.com/w320/lb.png",
          },
          choices: ["Guatemala", "Eritrea", "Lebanon"],
        },
        {
          question: {
            answer: "Bouvet Island",
            flag_url: "https://flagcdn.com/w320/bv.png",
          },
          choices: ["Peru", "Bouvet Island", "Uganda"],
        },
        {
          question: {
            answer: "Monaco",
            flag_url: "https://flagcdn.com/w320/mc.png",
          },
          choices: ["Moldova", "Cameroon", "Monaco"],
        },
        {
          question: {
            answer: "Åland Islands",
            flag_url: "https://flagcdn.com/w320/ax.png",
          },
          choices: ["Romania", "Bahamas", "Åland Islands"],
        },
        {
          question: {
            answer: "Zambia",
            flag_url: "https://flagcdn.com/w320/zm.png",
          },
          choices: ["Zambia", "Martinique", "Cyprus"],
        },
        {
          question: {
            answer: "North Macedonia",
            flag_url: "https://flagcdn.com/w320/mk.png",
          },
          choices: [
            "North Macedonia",
            "French Southern and Antarctic Lands",
            "Sierra Leone",
          ],
        },
        {
          question: {
            answer: "Malta",
            flag_url: "https://flagcdn.com/w320/mt.png",
          },
          choices: ["Puerto Rico", "Malta", "Åland Islands"],
        },
        {
          question: {
            answer: "Ukraine",
            flag_url: "https://flagcdn.com/w320/ua.png",
          },
          choices: ["Ukraine", "Jersey", "Jamaica"],
        },
        {
          question: {
            answer: "Colombia",
            flag_url: "https://flagcdn.com/w320/co.png",
          },
          choices: ["Colombia", "Mozambique", "Burundi"],
        },
        {
          question: {
            answer: "Vanuatu",
            flag_url: "https://flagcdn.com/w320/vu.png",
          },
          choices: ["Paraguay", "Liechtenstein", "Vanuatu"],
        },
        {
          question: {
            answer: "Liberia",
            flag_url: "https://flagcdn.com/w320/lr.png",
          },
          choices: ["Liberia", "Cocos (Keeling) Islands", "Switzerland"],
        },
        {
          question: {
            answer: "Palestine",
            flag_url: "https://flagcdn.com/w320/ps.png",
          },
          choices: ["Antarctica", "Palestine", "Colombia"],
        },
        {
          question: {
            answer: "Latvia",
            flag_url: "https://flagcdn.com/w320/lv.png",
          },
          choices: ["Latvia", "Åland Islands", "Comoros"],
        },
        {
          question: {
            answer: "Martinique",
            flag_url: "https://flagcdn.com/w320/mq.png",
          },
          choices: [
            "Martinique",
            "Saint Helena, Ascension and Tristan da Cunha",
            "Brunei",
          ],
        },
        {
          question: {
            answer: "Guernsey",
            flag_url: "https://flagcdn.com/w320/gg.png",
          },
          choices: ["Guernsey", "Brazil", "Saint Kitts and Nevis"],
        },
        {
          question: {
            answer: "Madagascar",
            flag_url: "https://flagcdn.com/w320/mg.png",
          },
          choices: ["Japan", "Madagascar", "Nauru"],
        },
        {
          question: {
            answer: "Algeria",
            flag_url: "https://flagcdn.com/w320/dz.png",
          },
          choices: [
            "Republic of the Congo",
            "United States Virgin Islands",
            "Algeria",
          ],
        },
        {
          question: {
            answer: "Niger",
            flag_url: "https://flagcdn.com/w320/ne.png",
          },
          choices: ["Turks and Caicos Islands", "Slovakia", "Niger"],
        },
        {
          question: {
            answer: "French Polynesia",
            flag_url: "https://flagcdn.com/w320/pf.png",
          },
          choices: ["Liechtenstein", "Namibia", "French Polynesia"],
        },
        {
          question: {
            answer: "Cyprus",
            flag_url: "https://flagcdn.com/w320/cy.png",
          },
          choices: ["Cyprus", "Rwanda", "Sudan"],
        },
        {
          question: {
            answer: "Falkland Islands",
            flag_url: "https://flagcdn.com/w320/fk.png",
          },
          choices: ["Belize", "Netherlands", "Falkland Islands"],
        },
        {
          question: {
            answer: "Maldives",
            flag_url: "https://flagcdn.com/w320/mv.png",
          },
          choices: ["Ivory Coast", "Maldives", "North Macedonia"],
        },
        {
          question: {
            answer: "Ireland",
            flag_url: "https://flagcdn.com/w320/ie.png",
          },
          choices: ["Peru", "Fiji", "Ireland"],
        },
        {
          question: {
            answer: "Pitcairn Islands",
            flag_url: "https://flagcdn.com/w320/pn.png",
          },
          choices: ["Maldives", "Pitcairn Islands", "Jamaica"],
        },
        {
          question: {
            answer: "Cuba",
            flag_url: "https://flagcdn.com/w320/cu.png",
          },
          choices: ["Iraq", "Cuba", "Equatorial Guinea"],
        },
        {
          question: {
            answer: "Luxembourg",
            flag_url: "https://flagcdn.com/w320/lu.png",
          },
          choices: ["Luxembourg", "Kosovo", "South Sudan"],
        },
        {
          question: {
            answer: "Ecuador",
            flag_url: "https://flagcdn.com/w320/ec.png",
          },
          choices: ["Oman", "Ecuador", "Hong Kong"],
        },
        {
          question: {
            answer: "Mongolia",
            flag_url: "https://flagcdn.com/w320/mn.png",
          },
          choices: ["Nauru", "Mongolia", "Uganda"],
        },
        {
          question: {
            answer: "Romania",
            flag_url: "https://flagcdn.com/w320/ro.png",
          },
          choices: ["Saint Martin", "Romania", "Argentina"],
        },
        {
          question: {
            answer: "Slovakia",
            flag_url: "https://flagcdn.com/w320/sk.png",
          },
          choices: ["Slovakia", "Northern Mariana Islands", "Papua New Guinea"],
        },
        {
          question: {
            answer: "Bahamas",
            flag_url: "https://flagcdn.com/w320/bs.png",
          },
          choices: ["Lesotho", "Montserrat", "Bahamas"],
        },
        {
          question: {
            answer: "Antigua and Barbuda",
            flag_url: "https://flagcdn.com/w320/ag.png",
          },
          choices: ["Antigua and Barbuda", "Laos", "Western Sahara"],
        },
        {
          question: {
            answer: "Cameroon",
            flag_url: "https://flagcdn.com/w320/cm.png",
          },
          choices: ["Thailand", "Cameroon", "Luxembourg"],
        },
        {
          question: {
            answer: "United Kingdom",
            flag_url: "https://flagcdn.com/w320/gb.png",
          },
          choices: ["Uruguay", "United Kingdom", "Marshall Islands"],
        },
        {
          question: {
            answer: "Norfolk Island",
            flag_url: "https://flagcdn.com/w320/nf.png",
          },
          choices: ["Norfolk Island", "Austria", "British Virgin Islands"],
        },
        {
          question: {
            answer: "Nauru",
            flag_url: "https://flagcdn.com/w320/nr.png",
          },
          choices: ["New Caledonia", "Nauru", "Republic of the Congo"],
        },
        {
          question: {
            answer: "Northern Mariana Islands",
            flag_url: "https://flagcdn.com/w320/mp.png",
          },
          choices: [
            "Ivory Coast",
            "Northern Mariana Islands",
            "Antigua and Barbuda",
          ],
        },
        {
          question: {
            answer: "Central African Republic",
            flag_url: "https://flagcdn.com/w320/cf.png",
          },
          choices: ["Martinique", "Central African Republic", "Benin"],
        },
        {
          question: {
            answer: "Western Sahara",
            flag_url: "https://flagcdn.com/w320/eh.png",
          },
          choices: ["Poland", "Western Sahara", "Philippines"],
        },
        {
          question: {
            answer: "Anguilla",
            flag_url: "https://flagcdn.com/w320/ai.png",
          },
          choices: ["Falkland Islands", "Anguilla", "Turkey"],
        },
        {
          question: {
            answer: "British Indian Ocean Territory",
            flag_url: "https://flagcdn.com/w320/io.png",
          },
          choices: ["France", "New Zealand", "British Indian Ocean Territory"],
        },
        {
          question: {
            answer: "Kazakhstan",
            flag_url: "https://flagcdn.com/w320/kz.png",
          },
          choices: ["Kazakhstan", "Zambia", "Ivory Coast"],
        },
        {
          question: {
            answer: "Guyana",
            flag_url: "https://flagcdn.com/w320/gy.png",
          },
          choices: ["Uruguay", "Jersey", "Guyana"],
        },
        {
          question: {
            answer: "Uzbekistan",
            flag_url: "https://flagcdn.com/w320/uz.png",
          },
          choices: ["Suriname", "Slovakia", "Uzbekistan"],
        },
        {
          question: {
            answer: "Curaçao",
            flag_url: "https://flagcdn.com/w320/cw.png",
          },
          choices: ["France", "Curaçao", "Republic of the Congo"],
        },
        {
          question: {
            answer: "New Zealand",
            flag_url: "https://flagcdn.com/w320/nz.png",
          },
          choices: ["Antarctica", "New Zealand", "Guinea-Bissau"],
        },
        {
          question: {
            answer: "Burundi",
            flag_url: "https://flagcdn.com/w320/bi.png",
          },
          choices: ["Burundi", "Italy", "Syria"],
        },
        {
          question: {
            answer: "Argentina",
            flag_url: "https://flagcdn.com/w320/ar.png",
          },
          choices: ["Argentina", "Sint Maarten", "Mozambique"],
        },
        {
          question: {
            answer: "Saint Pierre and Miquelon",
            flag_url: "https://flagcdn.com/w320/pm.png",
          },
          choices: ["Bulgaria", "Vanuatu", "Saint Pierre and Miquelon"],
        },
        {
          question: {
            answer: "Turks and Caicos Islands",
            flag_url: "https://flagcdn.com/w320/tc.png",
          },
          choices: ["Niue", "Turks and Caicos Islands", "Somalia"],
        },
        {
          question: {
            answer: "Finland",
            flag_url: "https://flagcdn.com/w320/fi.png",
          },
          choices: ["Estonia", "Finland", "Bahrain"],
        },
        {
          question: {
            answer: "Pakistan",
            flag_url: "https://flagcdn.com/w320/pk.png",
          },
          choices: ["Pakistan", "Saint Pierre and Miquelon", "Gabon"],
        },
        {
          question: {
            answer: "Bulgaria",
            flag_url: "https://flagcdn.com/w320/bg.png",
          },
          choices: ["Nicaragua", "Bulgaria", "Pakistan"],
        },
        {
          question: {
            answer: "North Korea",
            flag_url: "https://flagcdn.com/w320/kp.png",
          },
          choices: ["Zimbabwe", "Israel", "North Korea"],
        },
        {
          question: {
            answer: "Senegal",
            flag_url: "https://flagcdn.com/w320/sn.png",
          },
          choices: ["Macau", "Suriname", "Senegal"],
        },
        {
          question: {
            answer: "New Caledonia",
            flag_url: "https://flagcdn.com/w320/nc.png",
          },
          choices: ["New Caledonia", "Malta", "Mozambique"],
        },
        {
          question: {
            answer: "Morocco",
            flag_url: "https://flagcdn.com/w320/ma.png",
          },
          choices: ["Morocco", "DR Congo", "Brunei"],
        },
        {
          question: {
            answer: "Peru",
            flag_url: "https://flagcdn.com/w320/pe.png",
          },
          choices: ["Laos", "Peru", "Kenya"],
        },
        {
          question: {
            answer: "Eswatini",
            flag_url: "https://flagcdn.com/w320/sz.png",
          },
          choices: ["Slovakia", "Cuba", "Eswatini"],
        },
        {
          question: {
            answer: "Taiwan",
            flag_url: "https://flagcdn.com/w320/tw.png",
          },
          choices: ["Botswana", "Taiwan", "South Georgia"],
        },
        {
          question: {
            answer: "Benin",
            flag_url: "https://flagcdn.com/w320/bj.png",
          },
          choices: ["Martinique", "Benin", "Heard Island and McDonald Islands"],
        },
        {
          question: {
            answer: "Philippines",
            flag_url: "https://flagcdn.com/w320/ph.png",
          },
          choices: ["Greenland", "Azerbaijan", "Philippines"],
        },
        {
          question: {
            answer: "Gabon",
            flag_url: "https://flagcdn.com/w320/ga.png",
          },
          choices: ["Gabon", "Ireland", "Antarctica"],
        },
        {
          question: {
            answer: "Syria",
            flag_url: "https://flagcdn.com/w320/sy.png",
          },
          choices: ["Syria", "Moldova", "Saint Martin"],
        },
        {
          question: {
            answer: "Réunion",
            flag_url: "https://flagcdn.com/w320/re.png",
          },
          choices: ["Taiwan", "Réunion", "Norway"],
        },
        {
          question: {
            answer: "China",
            flag_url: "https://flagcdn.com/w320/cn.png",
          },
          choices: ["China", "Trinidad and Tobago", "Papua New Guinea"],
        },
        {
          question: {
            answer: "Bhutan",
            flag_url: "https://flagcdn.com/w320/bt.png",
          },
          choices: ["Uganda", "Costa Rica", "Bhutan"],
        },
        {
          question: {
            answer: "Eritrea",
            flag_url: "https://flagcdn.com/w320/er.png",
          },
          choices: ["Eritrea", "Kyrgyzstan", "Isle of Man"],
        },
        {
          question: {
            answer: "Brunei",
            flag_url: "https://flagcdn.com/w320/bn.png",
          },
          choices: ["Saint Kitts and Nevis", "Brunei", "Moldova"],
        },
        {
          question: {
            answer: "Cape Verde",
            flag_url: "https://flagcdn.com/w320/cv.png",
          },
          choices: ["Cape Verde", "Moldova", "Solomon Islands"],
        },
        {
          question: {
            answer: "Denmark",
            flag_url: "https://flagcdn.com/w320/dk.png",
          },
          choices: ["Denmark", "DR Congo", "Nicaragua"],
        },
        {
          question: {
            answer: "India",
            flag_url: "https://flagcdn.com/w320/in.png",
          },
          choices: ["Tokelau", "Kosovo", "India"],
        },
        {
          question: {
            answer: "Comoros",
            flag_url: "https://flagcdn.com/w320/km.png",
          },
          choices: ["Comoros", "Brazil", "Equatorial Guinea"],
        },
        {
          question: {
            answer: "Gambia",
            flag_url: "https://flagcdn.com/w320/gm.png",
          },
          choices: ["Papua New Guinea", "Antarctica", "Gambia"],
        },
        {
          question: {
            answer: "Uruguay",
            flag_url: "https://flagcdn.com/w320/uy.png",
          },
          choices: ["Uruguay", "Martinique", "New Caledonia"],
        },
        {
          question: {
            answer: "Samoa",
            flag_url: "https://flagcdn.com/w320/ws.png",
          },
          choices: ["Samoa", "Montserrat", "Eswatini"],
        },
        {
          question: {
            answer: "Nicaragua",
            flag_url: "https://flagcdn.com/w320/ni.png",
          },
          choices: [
            "Montenegro",
            "Heard Island and McDonald Islands",
            "Nicaragua",
          ],
        },
        {
          question: {
            answer: "Tajikistan",
            flag_url: "https://flagcdn.com/w320/tj.png",
          },
          choices: ["Montenegro", "Tajikistan", "Rwanda"],
        },
        {
          question: {
            answer: "Malawi",
            flag_url: "https://flagcdn.com/w320/mw.png",
          },
          choices: ["Libya", "Malawi", "Kazakhstan"],
        },
        {
          question: {
            answer: "Mozambique",
            flag_url: "https://flagcdn.com/w320/mz.png",
          },
          choices: ["Mozambique", "Tonga", "Russia"],
        },
        {
          question: {
            answer: "Honduras",
            flag_url: "https://flagcdn.com/w320/hn.png",
          },
          choices: ["Indonesia", "Slovenia", "Honduras"],
        },
        {
          question: {
            answer: "Heard Island and McDonald Islands",
            flag_url: "https://flagcdn.com/w320/hm.png",
          },
          choices: [
            "Solomon Islands",
            "Trinidad and Tobago",
            "Heard Island and McDonald Islands",
          ],
        },
        {
          question: {
            answer: "DR Congo",
            flag_url: "https://flagcdn.com/w320/cd.png",
          },
          choices: ["DR Congo", "Luxembourg", "Chad"],
        },
        {
          question: {
            answer: "Bosnia and Herzegovina",
            flag_url: "https://flagcdn.com/w320/ba.png",
          },
          choices: ["United States", "Samoa", "Bosnia and Herzegovina"],
        },
        {
          question: {
            answer: "Trinidad and Tobago",
            flag_url: "https://flagcdn.com/w320/tt.png",
          },
          choices: ["South Georgia", "Trinidad and Tobago", "Denmark"],
        },
        {
          question: {
            answer: "Poland",
            flag_url: "https://flagcdn.com/w320/pl.png",
          },
          choices: ["Poland", "Svalbard and Jan Mayen", "Iceland"],
        },
        {
          question: {
            answer: "Cayman Islands",
            flag_url: "https://flagcdn.com/w320/ky.png",
          },
          choices: ["Niue", "Republic of the Congo", "Cayman Islands"],
        },
        {
          question: {
            answer: "Albania",
            flag_url: "https://flagcdn.com/w320/al.png",
          },
          choices: ["Greece", "Timor-Leste", "Albania"],
        },
        {
          question: {
            answer: "Equatorial Guinea",
            flag_url: "https://flagcdn.com/w320/gq.png",
          },
          choices: ["Indonesia", "Equatorial Guinea", "Caribbean Netherlands"],
        },
        {
          question: {
            answer: "Portugal",
            flag_url: "https://flagcdn.com/w320/pt.png",
          },
          choices: ["Vanuatu", "Malawi", "Portugal"],
        },
        {
          question: {
            answer: "Switzerland",
            flag_url: "https://flagcdn.com/w320/ch.png",
          },
          choices: [
            "Switzerland",
            "Puerto Rico",
            "United States Minor Outlying Islands",
          ],
        },
        {
          question: {
            answer: "Guinea",
            flag_url: "https://flagcdn.com/w320/gn.png",
          },
          choices: [
            "Portugal",
            "Guinea",
            "United States Minor Outlying Islands",
          ],
        },
        {
          question: {
            answer: "Germany",
            flag_url: "https://flagcdn.com/w320/de.png",
          },
          choices: [
            "Germany",
            "Western Sahara",
            "French Southern and Antarctic Lands",
          ],
        },
        {
          question: {
            answer: "Antarctica",
            flag_url: "https://flagcdn.com/w320/aq.png",
          },
          choices: ["New Zealand", "Antarctica", "Palestine"],
        },
        {
          question: {
            answer: "French Guiana",
            flag_url: "https://flagcdn.com/w320/gf.png",
          },
          choices: ["Montserrat", "Qatar", "French Guiana"],
        },
        {
          question: {
            answer: "Australia",
            flag_url: "https://flagcdn.com/w320/au.png",
          },
          choices: [
            "United States Minor Outlying Islands",
            "Mongolia",
            "Australia",
          ],
        },
        {
          question: {
            answer: "Azerbaijan",
            flag_url: "https://flagcdn.com/w320/az.png",
          },
          choices: ["Azerbaijan", "Venezuela", "Saint Lucia"],
        },
        {
          question: {
            answer: "Paraguay",
            flag_url: "https://flagcdn.com/w320/py.png",
          },
          choices: ["Paraguay", "Timor-Leste", "Åland Islands"],
        },
        {
          question: {
            answer: "Solomon Islands",
            flag_url: "https://flagcdn.com/w320/sb.png",
          },
          choices: ["Solomon Islands", "Christmas Island", "Bhutan"],
        },
        {
          question: {
            answer: "Mali",
            flag_url: "https://flagcdn.com/w320/ml.png",
          },
          choices: ["Finland", "Mali", "Seychelles"],
        },
        {
          question: {
            answer: "Guam",
            flag_url: "https://flagcdn.com/w320/gu.png",
          },
          choices: ["Guam", "Ivory Coast", "Greenland"],
        },
        {
          question: {
            answer: "Wallis and Futuna",
            flag_url: "https://flagcdn.com/w320/wf.png",
          },
          choices: ["Wallis and Futuna", "Bolivia", "Azerbaijan"],
        },
        {
          question: {
            answer: "Papua New Guinea",
            flag_url: "https://flagcdn.com/w320/pg.png",
          },
          choices: ["North Macedonia", "Bermuda", "Papua New Guinea"],
        },
        {
          question: {
            answer: "Moldova",
            flag_url: "https://flagcdn.com/w320/md.png",
          },
          choices: ["Moldova", "Bhutan", "Isle of Man"],
        },
        {
          question: {
            answer: "Greece",
            flag_url: "https://flagcdn.com/w320/gr.png",
          },
          choices: ["Cape Verde", "Greece", "Portugal"],
        },
        {
          question: {
            answer: "Yemen",
            flag_url: "https://flagcdn.com/w320/ye.png",
          },
          choices: ["Mongolia", "Yemen", "Tanzania"],
        },
        {
          question: {
            answer: "Turkmenistan",
            flag_url: "https://flagcdn.com/w320/tm.png",
          },
          choices: ["Serbia", "Turkmenistan", "Wallis and Futuna"],
        },
        {
          question: {
            answer: "United States Virgin Islands",
            flag_url: "https://flagcdn.com/w320/vi.png",
          },
          choices: ["United States Virgin Islands", "Cuba", "Monaco"],
        },
        {
          question: {
            answer: "Burkina Faso",
            flag_url: "https://flagcdn.com/w320/bf.png",
          },
          choices: ["Burkina Faso", "Nigeria", "Guyana"],
        },
        {
          question: {
            answer: "Ivory Coast",
            flag_url: "https://flagcdn.com/w320/ci.png",
          },
          choices: ["India", "Ivory Coast", "Mozambique"],
        },
        {
          question: {
            answer: "Qatar",
            flag_url: "https://flagcdn.com/w320/qa.png",
          },
          choices: ["Tanzania", "Qatar", "Benin"],
        },
        {
          question: {
            answer: "American Samoa",
            flag_url: "https://flagcdn.com/w320/as.png",
          },
          choices: ["Liechtenstein", "American Samoa", "Moldova"],
        },
        {
          question: {
            answer: "Tuvalu",
            flag_url: "https://flagcdn.com/w320/tv.png",
          },
          choices: ["Chile", "Brazil", "Tuvalu"],
        },
        {
          question: {
            answer: "Guinea-Bissau",
            flag_url: "https://flagcdn.com/w320/gw.png",
          },
          choices: ["India", "Sweden", "Guinea-Bissau"],
        },
        {
          question: {
            answer: "Greenland",
            flag_url: "https://flagcdn.com/w320/gl.png",
          },
          choices: ["Greenland", "Mali", "São Tomé and Príncipe"],
        },
        {
          question: {
            answer: "Tokelau",
            flag_url: "https://flagcdn.com/w320/tk.png",
          },
          choices: ["Tokelau", "Guyana", "Uzbekistan"],
        },
        {
          question: {
            answer: "Namibia",
            flag_url: "https://flagcdn.com/w320/na.png",
          },
          choices: ["Cook Islands", "Seychelles", "Namibia"],
        },
        {
          question: {
            answer: "Kuwait",
            flag_url: "https://flagcdn.com/w320/kw.png",
          },
          choices: ["Gabon", "Kuwait", "Liechtenstein"],
        },
        {
          question: {
            answer: "Christmas Island",
            flag_url: "https://flagcdn.com/w320/cx.png",
          },
          choices: ["Christmas Island", "Afghanistan", "Germany"],
        },
        {
          question: {
            answer: "Suriname",
            flag_url: "https://flagcdn.com/w320/sr.png",
          },
          choices: ["Jersey", "Bangladesh", "Suriname"],
        },
        {
          question: {
            answer: "Togo",
            flag_url: "https://flagcdn.com/w320/tg.png",
          },
          choices: ["Bahamas", "Togo", "Bolivia"],
        },
        {
          question: {
            answer: "Jersey",
            flag_url: "https://flagcdn.com/w320/je.png",
          },
          choices: ["Burkina Faso", "Jersey", "Finland"],
        },
        {
          question: {
            answer: "Bolivia",
            flag_url: "https://flagcdn.com/w320/bo.png",
          },
          choices: ["Bolivia", "Syria", "Gambia"],
        },
        {
          question: {
            answer: "Ethiopia",
            flag_url: "https://flagcdn.com/w320/et.png",
          },
          choices: [
            "Saint Helena, Ascension and Tristan da Cunha",
            "Ethiopia",
            "Argentina",
          ],
        },
        {
          question: {
            answer: "Ghana",
            flag_url: "https://flagcdn.com/w320/gh.png",
          },
          choices: ["Laos", "Gabon", "Ghana"],
        },
        {
          question: {
            answer: "Sint Maarten",
            flag_url: "https://flagcdn.com/w320/sx.png",
          },
          choices: ["Saint Barthélemy", "Sint Maarten", "Guinea-Bissau"],
        },
        {
          question: {
            answer: "Bangladesh",
            flag_url: "https://flagcdn.com/w320/bd.png",
          },
          choices: ["Iraq", "Bangladesh", "Taiwan"],
        },
        {
          question: {
            answer: "Kosovo",
            flag_url: "https://flagcdn.com/w320/xk.png",
          },
          choices: [
            "Bermuda",
            "Kosovo",
            "Saint Helena, Ascension and Tristan da Cunha",
          ],
        },
        {
          question: {
            answer: "United Arab Emirates",
            flag_url: "https://flagcdn.com/w320/ae.png",
          },
          choices: ["Angola", "United Arab Emirates", "Somalia"],
        },
        {
          question: {
            answer: "Kenya",
            flag_url: "https://flagcdn.com/w320/ke.png",
          },
          choices: ["Pakistan", "Venezuela", "Kenya"],
        },
        {
          question: {
            answer: "Georgia",
            flag_url: "https://flagcdn.com/w320/ge.png",
          },
          choices: ["Greenland", "Georgia", "Niger"],
        },
        {
          question: {
            answer: "Vietnam",
            flag_url: "https://flagcdn.com/w320/vn.png",
          },
          choices: ["Morocco", "Vietnam", "India"],
        },
        {
          question: {
            answer: "Andorra",
            flag_url: "https://flagcdn.com/w320/ad.png",
          },
          choices: ["Brunei", "Niue", "Andorra"],
        },
        {
          question: {
            answer: "Puerto Rico",
            flag_url: "https://flagcdn.com/w320/pr.png",
          },
          choices: ["Puerto Rico", "Greenland", "Denmark"],
        },
        {
          question: {
            answer: "Republic of the Congo",
            flag_url: "https://flagcdn.com/w320/cg.png",
          },
          choices: ["Solomon Islands", "Republic of the Congo", "Kiribati"],
        },
        {
          question: {
            answer: "Chad",
            flag_url: "https://flagcdn.com/w320/td.png",
          },
          choices: ["Chad", "Haiti", "Algeria"],
        },
        {
          question: {
            answer: "Bahrain",
            flag_url: "https://flagcdn.com/w320/bh.png",
          },
          choices: ["Bahrain", "Ethiopia", "Nauru"],
        },
        {
          question: {
            answer: "Mauritius",
            flag_url: "https://flagcdn.com/w320/mu.png",
          },
          choices: ["Bangladesh", "Mauritius", "Malawi"],
        },
        {
          question: {
            answer: "Aruba",
            flag_url: "https://flagcdn.com/w320/aw.png",
          },
          choices: ["Egypt", "Portugal", "Aruba"],
        },
        {
          question: {
            answer: "France",
            flag_url: "https://flagcdn.com/w320/fr.png",
          },
          choices: ["France", "Belarus", "Svalbard and Jan Mayen"],
        },
        {
          question: {
            answer: "Dominican Republic",
            flag_url: "https://flagcdn.com/w320/do.png",
          },
          choices: ["Solomon Islands", "Mayotte", "Dominican Republic"],
        },
        {
          question: {
            answer: "South Korea",
            flag_url: "https://flagcdn.com/w320/kr.png",
          },
          choices: ["South Korea", "Pakistan", "Tunisia"],
        },
        {
          question: {
            answer: "Kyrgyzstan",
            flag_url: "https://flagcdn.com/w320/kg.png",
          },
          choices: ["Kyrgyzstan", "Syria", "Cape Verde"],
        },
        {
          question: {
            answer: "Rwanda",
            flag_url: "https://flagcdn.com/w320/rw.png",
          },
          choices: [
            "British Indian Ocean Territory",
            "Rwanda",
            "Bouvet Island",
          ],
        },
        {
          question: {
            answer: "Sri Lanka",
            flag_url: "https://flagcdn.com/w320/lk.png",
          },
          choices: ["Seychelles", "Sri Lanka", "Nigeria"],
        },
        {
          question: {
            answer: "Grenada",
            flag_url: "https://flagcdn.com/w320/gd.png",
          },
          choices: ["Bangladesh", "Hungary", "Grenada"],
        },
        {
          question: {
            answer: "Montserrat",
            flag_url: "https://flagcdn.com/w320/ms.png",
          },
          choices: ["Nauru", "Montserrat", "United Kingdom"],
        },
        {
          question: {
            answer: "Uganda",
            flag_url: "https://flagcdn.com/w320/ug.png",
          },
          choices: ["Wallis and Futuna", "Uganda", "Republic of the Congo"],
        },
        {
          question: {
            answer: "Isle of Man",
            flag_url: "https://flagcdn.com/w320/im.png",
          },
          choices: ["Isle of Man", "French Guiana", "Iraq"],
        },
        {
          question: {
            answer: "Turkey",
            flag_url: "https://flagcdn.com/w320/tr.png",
          },
          choices: ["Slovenia", "San Marino", "Turkey"],
        },
        {
          question: {
            answer: "Nepal",
            flag_url: "https://flagcdn.com/w320/np.png",
          },
          choices: ["Indonesia", "Nepal", "Romania"],
        },
        {
          question: {
            answer: "United States",
            flag_url: "https://flagcdn.com/w320/us.png",
          },
          choices: ["Antarctica", "Burundi", "United States"],
        },
        {
          question: {
            answer: "Cocos (Keeling) Islands",
            flag_url: "https://flagcdn.com/w320/cc.png",
          },
          choices: ["Cocos (Keeling) Islands", "Barbados", "Malta"],
        },
        {
          question: {
            answer: "Singapore",
            flag_url: "https://flagcdn.com/w320/sg.png",
          },
          choices: ["Singapore", "Kyrgyzstan", "Hong Kong"],
        },
        {
          question: {
            answer: "Tunisia",
            flag_url: "https://flagcdn.com/w320/tn.png",
          },
          choices: ["Tunisia", "Mauritania", "Bahamas"],
        },
        {
          question: {
            answer: "South Sudan",
            flag_url: "https://flagcdn.com/w320/ss.png",
          },
          choices: ["South Sudan", "Saint Martin", "Saint Kitts and Nevis"],
        },
        {
          question: {
            answer: "British Virgin Islands",
            flag_url: "https://flagcdn.com/w320/vg.png",
          },
          choices: ["Kyrgyzstan", "British Virgin Islands", "Cape Verde"],
        },
        {
          question: {
            answer: "Sierra Leone",
            flag_url: "https://flagcdn.com/w320/sl.png",
          },
          choices: ["Sierra Leone", "Thailand", "British Virgin Islands"],
        },
        {
          question: {
            answer: "Somalia",
            flag_url: "https://flagcdn.com/w320/so.png",
          },
          choices: ["Mexico", "Somalia", "Wallis and Futuna"],
        },
        {
          question: {
            answer: "Saint Helena, Ascension and Tristan da Cunha",
            flag_url: "https://flagcdn.com/w320/sh.png",
          },
          choices: [
            "Saint Helena, Ascension and Tristan da Cunha",
            "French Southern and Antarctic Lands",
            "Greenland",
          ],
        },
        {
          question: {
            answer: "Oman",
            flag_url: "https://flagcdn.com/w320/om.png",
          },
          choices: ["Åland Islands", "Cameroon", "Oman"],
        },
        {
          question: {
            answer: "Liechtenstein",
            flag_url: "https://flagcdn.com/w320/li.png",
          },
          choices: ["France", "Liechtenstein", "Morocco"],
        },
        {
          question: {
            answer: "Italy",
            flag_url: "https://flagcdn.com/w320/it.png",
          },
          choices: ["Italy", "Taiwan", "Grenada"],
        },
        {
          question: {
            answer: "Cook Islands",
            flag_url: "https://flagcdn.com/w320/ck.png",
          },
          choices: ["Cook Islands", "Lebanon", "Hong Kong"],
        },
        {
          question: {
            answer: "Saint Kitts and Nevis",
            flag_url: "https://flagcdn.com/w320/kn.png",
          },
          choices: ["Saint Kitts and Nevis", "Pakistan", "United Kingdom"],
        },
        {
          question: {
            answer: "Laos",
            flag_url: "https://flagcdn.com/w320/la.png",
          },
          choices: ["Laos", "Saint Martin", "Malawi"],
        },
        {
          question: {
            answer: "Timor-Leste",
            flag_url: "https://flagcdn.com/w320/tl.png",
          },
          choices: ["Timor-Leste", "Malawi", "Paraguay"],
        },
        {
          question: {
            answer: "Niue",
            flag_url: "https://flagcdn.com/w320/nu.png",
          },
          choices: ["British Indian Ocean Territory", "India", "Niue"],
        },
        {
          question: {
            answer: "Marshall Islands",
            flag_url: "https://flagcdn.com/w320/mh.png",
          },
          choices: ["Nicaragua", "Rwanda", "Marshall Islands"],
        },
        {
          question: {
            answer: "Panama",
            flag_url: "https://flagcdn.com/w320/pa.png",
          },
          choices: ["Panama", "Antigua and Barbuda", "Albania"],
        },
        {
          question: {
            answer: "Russia",
            flag_url: "https://flagcdn.com/w320/ru.png",
          },
          choices: ["Ivory Coast", "Faroe Islands", "Russia"],
        },
        {
          question: {
            answer: "Iran",
            flag_url: "https://flagcdn.com/w320/ir.png",
          },
          choices: ["Georgia", "Iran", "Kyrgyzstan"],
        },
        {
          question: {
            answer: "Micronesia",
            flag_url: "https://flagcdn.com/w320/fm.png",
          },
          choices: ["Micronesia", "Lithuania", "Antigua and Barbuda"],
        },
        {
          question: {
            answer: "Israel",
            flag_url: "https://flagcdn.com/w320/il.png",
          },
          choices: ["Georgia", "Saint Vincent and the Grenadines", "Israel"],
        },
        {
          question: {
            answer: "San Marino",
            flag_url: "https://flagcdn.com/w320/sm.png",
          },
          choices: ["Slovenia", "San Marino", "Burkina Faso"],
        },
        {
          question: {
            answer: "Montenegro",
            flag_url: "https://flagcdn.com/w320/me.png",
          },
          choices: ["Kosovo", "Belgium", "Montenegro"],
        },
        {
          question: {
            answer: "South Africa",
            flag_url: "https://flagcdn.com/w320/za.png",
          },
          choices: ["Bouvet Island", "Cyprus", "South Africa"],
        },
        {
          question: {
            answer: "Myanmar",
            flag_url: "https://flagcdn.com/w320/mm.png",
          },
          choices: ["Seychelles", "Myanmar", "Guyana"],
        },
        {
          question: {
            answer: "Caribbean Netherlands",
            flag_url: "https://flagcdn.com/w320/bq.png",
          },
          choices: ["Jordan", "Greece", "Caribbean Netherlands"],
        },
        {
          question: {
            answer: "Estonia",
            flag_url: "https://flagcdn.com/w320/ee.png",
          },
          choices: ["North Korea", "Estonia", "Kosovo"],
        },
        {
          question: {
            answer: "Indonesia",
            flag_url: "https://flagcdn.com/w320/id.png",
          },
          choices: ["Indonesia", "Aruba", "Martinique"],
        },
        {
          question: {
            answer: "Lithuania",
            flag_url: "https://flagcdn.com/w320/lt.png",
          },
          choices: ["Lithuania", "Palestine", "Croatia"],
        },
        {
          question: {
            answer: "Lesotho",
            flag_url: "https://flagcdn.com/w320/ls.png",
          },
          choices: ["Pitcairn Islands", "Lesotho", "Afghanistan"],
        },
        {
          question: {
            answer: "French Southern and Antarctic Lands",
            flag_url: "https://flagcdn.com/w320/tf.png",
          },
          choices: ["Belgium", "French Southern and Antarctic Lands", "Monaco"],
        },
        {
          question: {
            answer: "Guatemala",
            flag_url: "https://flagcdn.com/w320/gt.png",
          },
          choices: ["Réunion", "Hong Kong", "Guatemala"],
        },
        {
          question: {
            answer: "Botswana",
            flag_url: "https://flagcdn.com/w320/bw.png",
          },
          choices: ["Botswana", "Georgia", "Croatia"],
        },
        {
          question: {
            answer: "Cambodia",
            flag_url: "https://flagcdn.com/w320/kh.png",
          },
          choices: ["Spain", "Cambodia", "Cocos (Keeling) Islands"],
        },
        {
          question: {
            answer: "Palau",
            flag_url: "https://flagcdn.com/w320/pw.png",
          },
          choices: ["Nepal", "Sudan", "Palau"],
        },
        {
          question: {
            answer: "Czechia",
            flag_url: "https://flagcdn.com/w320/cz.png",
          },
          choices: ["Myanmar", "Ethiopia", "Czechia"],
        },
        {
          question: {
            answer: "Sudan",
            flag_url: "https://flagcdn.com/w320/sd.png",
          },
          choices: ["Sudan", "Northern Mariana Islands", "Peru"],
        },
        {
          question: {
            answer: "Vatican City",
            flag_url: "https://flagcdn.com/w320/va.png",
          },
          choices: ["Vatican City", "Tunisia", "Central African Republic"],
        },
        {
          question: {
            answer: "Djibouti",
            flag_url: "https://flagcdn.com/w320/dj.png",
          },
          choices: ["Niger", "Portugal", "Djibouti"],
        },
        {
          question: {
            answer: "Canada",
            flag_url: "https://flagcdn.com/w320/ca.png",
          },
          choices: ["Canada", "Slovenia", "Zambia"],
        },
        {
          question: {
            answer: "Netherlands",
            flag_url: "https://flagcdn.com/w320/nl.png",
          },
          choices: ["Seychelles", "San Marino", "Netherlands"],
        },
        {
          question: {
            answer: "Belize",
            flag_url: "https://flagcdn.com/w320/bz.png",
          },
          choices: ["Martinique", "Belize", "Singapore"],
        },
        {
          question: {
            answer: "Hong Kong",
            flag_url: "https://flagcdn.com/w320/hk.png",
          },
          choices: ["Hong Kong", "Tajikistan", "Martinique"],
        },
        {
          question: {
            answer: "Iraq",
            flag_url: "https://flagcdn.com/w320/iq.png",
          },
          choices: ["Bahrain", "Iraq", "Anguilla"],
        },
        {
          question: {
            answer: "Nigeria",
            flag_url: "https://flagcdn.com/w320/ng.png",
          },
          choices: ["Nigeria", "Niger", "Mozambique"],
        },
        {
          question: {
            answer: "Tonga",
            flag_url: "https://flagcdn.com/w320/to.png",
          },
          choices: ["Taiwan", "Belarus", "Tonga"],
        },
        {
          question: {
            answer: "Malaysia",
            flag_url: "https://flagcdn.com/w320/my.png",
          },
          choices: ["Malaysia", "Mozambique", "Lithuania"],
        },
        {
          question: {
            answer: "United States Minor Outlying Islands",
            flag_url: "https://flagcdn.com/w320/um.png",
          },
          choices: [
            "United States Minor Outlying Islands",
            "Indonesia",
            "Christmas Island",
          ],
        },
        {
          question: {
            answer: "Brazil",
            flag_url: "https://flagcdn.com/w320/br.png",
          },
          choices: ["Brazil", "Guam", "Peru"],
        },
        {
          question: {
            answer: "Austria",
            flag_url: "https://flagcdn.com/w320/at.png",
          },
          choices: ["Germany", "Austria", "Trinidad and Tobago"],
        },
        {
          question: {
            answer: "Costa Rica",
            flag_url: "https://flagcdn.com/w320/cr.png",
          },
          choices: ["Costa Rica", "United Arab Emirates", "Netherlands"],
        },
        {
          question: {
            answer: "Belgium",
            flag_url: "https://flagcdn.com/w320/be.png",
          },
          choices: ["Belgium", "Ghana", "Peru"],
        },
        {
          question: {
            answer: "Thailand",
            flag_url: "https://flagcdn.com/w320/th.png",
          },
          choices: ["Slovakia", "Mauritania", "Thailand"],
        },
        {
          question: {
            answer: "Svalbard and Jan Mayen",
            flag_url: "https://flagcdn.com/w320/sj.png",
          },
          choices: ["Rwanda", "Vanuatu", "Svalbard and Jan Mayen"],
        },
        {
          question: {
            answer: "Haiti",
            flag_url: "https://flagcdn.com/w320/ht.png",
          },
          choices: ["Haiti", "Uganda", "Slovenia"],
        },
        {
          question: {
            answer: "Tanzania",
            flag_url: "https://flagcdn.com/w320/tz.png",
          },
          choices: [
            "Saint Helena, Ascension and Tristan da Cunha",
            "Tanzania",
            "Israel",
          ],
        },
      ],
    },
  }),
  actions: {
    /**func to dynamically set the component to show */
    setTab(tabName: string) {
      this.currentTab = tabName;
    },
    /**func to restart quiz */
    async restartQuiz() {
      this.timeLeft = 51;
      await this.getQuestions();
      if (this.currentTab !== "quiz") {
        this.setTab("quiz");
      }
      this.currentQuestionIndex = 0;
      this.userScore = 0; /**reset */
      // this.startQuizTimer();
    },
    /**to check if time for the entire quiz is over */
    startQuizTimer() {
      let quizTimer = setInterval(async () => {
        if (this.timeLeft > 0) {
          this.timeLeft--; /**decreases every second */
        } else {
          clearInterval(quizTimer); /**time for quiz ended, post user results */

          await this.postUserResult(); /**post user results */

          this.setTab("quizComplete");
        }
      }, 1000);
    },
    async postUserResult() {
      /**func to post user result after completed quiz */

      try {
        // const {data} = await axiosInstance.post("/score/create", {

        const formData = new FormData();
        formData.append("username", this.userName);
        formData.append("score", this.userScore.toString());
        const { data } = await axiosInstance.post("/score/create/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (data) {
          console.log("post score data ", data);
        }
      } catch (error) {
        console.log("post score error => ", error);
      }
    },
    async getLeaderboard() {
      try {
        const { data } = await axiosInstance("/results/");
        if (data) {
          return data;
        }
      } catch (error) {
        console.log("Error => ", error);
        return null;
      }
    },
    nextQuestion() {
      /**func to take user to next question */
      if (this.currentQuestionIndex < this.data.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.setTab("quizComplete");
      }
    },
    updateUserScore(correct: boolean) {
      if (correct) this.userScore++;
    },
    async getQuestions() {
      /**func to get the questions */
      try {
        const { data } = await axiosInstance("/quiz/");
        if (data) {
          this.flagQuestions = data;
        }
      } catch (error) {
        console.log("Error => ", error);
      }
    },
  },
});
