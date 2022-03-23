function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (1000000*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var strScore = getCookie("strScore")
document.getElementById("strScore").value = strScore
var dexScore = getCookie("dexScore")
document.getElementById("dexScore").value = dexScore
var conScore = getCookie("conScore")
document.getElementById("conScore").value = conScore
var intScore = getCookie("intScore")
document.getElementById("intScore").value = intScore
var wisScore = getCookie("wisScore")
document.getElementById("wisScore").value = wisScore
var chaScore = getCookie("chaScore")
document.getElementById("chaScore").value = chaScore

var strMod = 0
var dexMod = 0
var conMod = 0
var intMod = 0
var wisMod = 0
var chaMod = 0

var HP = getCookie("HP")
document.getElementById("currentHP").value = HP
var tempHP = getCookie("tempHP")
document.getElementById("tempHP").value = tempHP
var nlHP = getCookie("nlHP")
document.getElementById("nlHP").value = nlHP
var maxHP = 0

var totalXP = 66
var level = Math.floor(totalXP / 22)

var armorBonus = getCookie("armorBonus")
document.getElementById("armorBonus").value = armorBonus
var dodgeBonus = getCookie("dodgeBonus")
document.getElementById("dodgeBonus").value = dodgeBonus

var initBonus = getCookie("initBonus")
document.getElementById("initBonus").value = initBonus

var speed = getCookie("speed")
document.getElementById("speed").value = speed

function updateAbiScore() {
    str = document.getElementById("strScore").value;
    if (str == "") {
      document.getElementById("strMod").innerHTML = "0"
    } else {
      str = parseInt(str)
      strMod = Math.floor((str - 10) / 2)
      if (strMod > 0) {
        document.getElementById("strMod").innerHTML = "+" + strMod
      } else {
        document.getElementById("strMod").innerHTML = strMod
      }
    }
    dex = document.getElementById("dexScore").value;
    if (dex == "") {
      document.getElementById("dexMod").innerHTML = "0"
    } else {
      dex = parseInt(dex)
      dexMod = Math.floor((dex - 10) / 2)
      if (dexMod > 0) {
        document.getElementById("dexMod").innerHTML = "+" + dexMod
      } else {
        document.getElementById("dexMod").innerHTML = dexMod
      }
    }
    con = document.getElementById("conScore").value;
    if (con == "") {
      document.getElementById("conMod").innerHTML = "0"
    } else {
      con = parseInt(con)
      conMod = Math.floor((con - 10) / 2)
      if (conMod > 0) {
        document.getElementById("conMod").innerHTML = "+" + conMod
      } else {
        document.getElementById("conMod").innerHTML = conMod
      }
    }
    int = document.getElementById("intScore").value;
    if (int == "") {
      document.getElementById("intMod").innerHTML = "0"
    } else {
      int = parseInt(int)
      intMod = Math.floor((int - 10) / 2)
      if (intMod > 0) {
        document.getElementById("intMod").innerHTML = "+" + intMod
      } else {
        document.getElementById("intMod").innerHTML = intMod
      }
    }
    wis = document.getElementById("wisScore").value;
    if (wis == "") {
      document.getElementById("wisMod").innerHTML = "0"
    } else {
      wis = parseInt(wis)
      wisMod = Math.floor((wis - 10) / 2)
      if (wisMod > 0) {
        document.getElementById("wisMod").innerHTML = "+" + wisMod
      } else {
        document.getElementById("wisMod").innerHTML = wisMod
      }
    }
    cha = document.getElementById("chaScore").value;
    if (cha == "") {
      document.getElementById("chaMod").innerHTML = "0"
    } else {
      cha = parseInt(cha)
      chaMod = Math.floor((cha - 10) / 2)
      if (chaMod > 0) {
        document.getElementById("chaMod").innerHTML = "+" + chaMod
      } else {
        document.getElementById("chaMod").innerHTML = chaMod
      }
    }
    setCookie("strScore", str)
    setCookie("dexScore", dex)
    setCookie("conScore", con)
    setCookie("intScore", int)
    setCookie("wisScore", wis)
    setCookie("chaScore", cha)
    
}

function updateHP() {
    maxHP = 8 + (((level - 1) % 2) * 4) + (Math.floor((level - 1) / 2) * 9) + (conMod * level)
    document.getElementById("maxHP").innerHTML = "" + maxHP

    HP = document.getElementById("currentHP").value;
    if (HP == "") {
      HP = 0
    }
    document.getElementById("hpBar").setAttribute("value", HP)
    document.getElementById("hpBar").setAttribute("max", maxHP)
    percent = HP / maxHP
    if (percent <= 0.2) {
      document.getElementById("hpBar").setAttribute("class", "progress is-danger")
    } else if (percent <= 0.6) {
      document.getElementById("hpBar").setAttribute("class", "progress is-warning")
    } else {
      document.getElementById("hpBar").setAttribute("class", "progress is-success")
    }

    setCookie("HP", HP)
    setCookie("tempHP", document.getElementById("tempHP").value)
    setCookie("nlHP", document.getElementById("nlHP").value)
}

function updateAC() {
    armorBonus = document.getElementById("armorBonus").value;
    if (armorBonus == "") {
      armorBonus = 0
    }
    dodgeBonus = document.getElementById("dodgeBonus").value;
    if (dodgeBonus == "") {
      dodgeBonus = 0
    }

    AC = 10 + dexMod + parseInt(armorBonus) + parseInt(dodgeBonus)
    TAC = 10 + dexMod + parseInt(dodgeBonus)
    FFAC = 10 + parseInt(armorBonus)

    document.getElementById("AC").innerHTML = AC
    document.getElementById("touchAC").innerHTML = TAC
    document.getElementById("ffAC").innerHTML = FFAC

    setCookie("armorBonus", armorBonus)
    setCookie("dodgeBonus", dodgeBonus)
}

function updateInit() {
    initBonus = document.getElementById("initBonus").value;
    if (initBonus == "") {
      initBonus = 0
    }

    init = dexMod + parseInt(initBonus)
    document.getElementById("init").innerHTML = init

    setCookie("initBonus", initBonus)
}

function updateSpeed() {
    speed = document.getElementById("speed").value;
    setCookie("speed", speed)
}

function update() {
    updateAbiScore()
    updateHP()
    updateAC()
    updateInit()
    updateSpeed()
}

update()