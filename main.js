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

var name = getCookie("name")
document.getElementById("name").value = name

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

var totalXP = getCookie("totalXP")
document.getElementById("currentXP").value = totalXP
var level = Math.floor(totalXP / 22)

var armorBonus = getCookie("armorBonus")
document.getElementById("armorBonus").value = armorBonus
var dodgeBonus = getCookie("dodgeBonus")
document.getElementById("dodgeBonus").value = dodgeBonus
var acBonus = getCookie("acBonus")
document.getElementById("acBonus").value = acBonus

var initBonus = getCookie("initBonus")
document.getElementById("initBonus").value = initBonus

var speed = getCookie("speed")
document.getElementById("speed").value = speed

var fortSave = getCookie("fortSave")
document.getElementById("save-fort-cb").checked = (fortSave === 'true')
var refSave = getCookie("refSave")
document.getElementById("save-ref-cb").checked = (refSave === 'true')
var willSave = getCookie("willSave")
document.getElementById("save-will-cb").checked = (willSave === 'true')

var fortSaveXP = getCookie("fortSaveXP")
document.getElementById("save-fort-exp").value = fortSaveXP
var refSaveXP = getCookie("refSaveXP")
document.getElementById("save-ref-exp").value = refSaveXP
var willSaveXP = getCookie("willSaveXP")
document.getElementById("save-will-exp").value = willSaveXP

var skills = [["Acrobatics", 1], ["Appraise", 3], ["Bluff", 5], ["Blood Magic", 3], ["Climb", 0], ["Craft", 3], ["Craft Homunculus", 3], ["Diplomacy", 5], ["Disable Device", 1], ["Disguise", 5], ["Escape Artist", 1], ["Fly", 1], ["Handle Animal", 5], ["Heal", 3], ["Intimidate", 5], ["Linguistic", 3], ["Perception", 4], ["Perform", 5], ["Profession", 4], ["Ride", 1], ["Ritual", 3], ["Sense Motive", 5], ["Slight of Hand", 1], ["Sorcery", 5], ["Spellcraft", 3], ["Stealth", 1], ["Survival", 4], ["Swim", 0], ["Use Magic Item", 5]]
var skillsFormat = []
for (let i = 0; i < skills.length; i++) {
  skill = skills[i][0]
  skill = skill.toLowerCase()
  skill = skill.replace(/\s/g, '-');
  skillsFormat[i] = skill
}

skillValueCookie = getCookie("skillValues")
var skillValues = {}
if (skillValueCookie != "") {
  skillValues = JSON.parse(skillValueCookie)
}

var numberOfFeats = getCookie("numberOfFeats")
if (numberOfFeats == "") {
  numberOfFeats = 0
}

featValueCookie = getCookie("featValues")
var featValues = {}
if (featValueCookie != "") {
  featValues = JSON.parse(featValueCookie)
  for (let i = 0; i < numberOfFeats; i++) {
    createNewFeat(i)
    feat = document.getElementById("feat-" + i)
    feat.getElementsByClassName("feat-name")[0].value = featValues[i]["featName"]
    feat.getElementsByClassName("feat-xp")[0].value = featValues[i]["featXp"]
    feat.getElementsByClassName("feat-description")[0].value = featValues[i]["featDesc"]
  }
}

function updateName() {
    name = document.getElementById("name").value;
    setCookie("name", name)
}

function updateAbiScore() {
    strScore = document.getElementById("strScore").value;
    if (strScore == "") {
      strScore = 10
    }
    strScore = parseInt(strScore)
    strMod = Math.floor((strScore - 10) / 2)
    if (strMod > 0) {
      document.getElementById("strMod").innerHTML = "+" + strMod
    } else {
      document.getElementById("strMod").innerHTML = strMod
    }

    dexScore = document.getElementById("dexScore").value;
    if (dexScore == "") {
      dexScore = 10
    }
    dexScore = parseInt(dexScore)
    dexMod = Math.floor((dexScore - 10) / 2)
    if (dexMod > 0) {
      document.getElementById("dexMod").innerHTML = "+" + dexMod
    } else {
      document.getElementById("dexMod").innerHTML = dexMod
    }

    conScore = document.getElementById("conScore").value;
    if (conScore == "") {
      conScore = 10
    }
    conScore = parseInt(conScore)
    conMod = Math.floor((conScore - 10) / 2)
    if (conMod > 0) {
      document.getElementById("conMod").innerHTML = "+" + conMod
    } else {
      document.getElementById("conMod").innerHTML = conMod
    }

    intScore = document.getElementById("intScore").value;
    if (intScore == "") {
      intScore = 10
    }
    intScore = parseInt(intScore)
    intMod = Math.floor((intScore - 10) / 2)
    if (intMod > 0) {
      document.getElementById("intMod").innerHTML = "+" + intMod
    } else {
      document.getElementById("intMod").innerHTML = intMod
    }

    wisScore = document.getElementById("wisScore").value;
    if (wisScore == "") {
      wisScore = 10
    }
    wisScore = parseInt(wisScore)
    wisMod = Math.floor((wisScore - 10) / 2)
    if (wisMod > 0) {
      document.getElementById("wisMod").innerHTML = "+" + wisMod
    } else {
      document.getElementById("wisMod").innerHTML = wisMod
    }

    chaScore = document.getElementById("chaScore").value;
    if (chaScore == "") {
      chaScore = 10
    }
    chaScore = parseInt(chaScore)
    chaMod = Math.floor((chaScore - 10) / 2)
    if (chaMod > 0) {
      document.getElementById("chaMod").innerHTML = "+" + chaMod
    } else {
      document.getElementById("chaMod").innerHTML = chaMod
    }

    setCookie("strScore", strScore)
    setCookie("dexScore", dexScore)
    setCookie("conScore", conScore)
    setCookie("intScore", intScore)
    setCookie("wisScore", wisScore)
    setCookie("chaScore", chaScore)

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
    acBonus = document.getElementById("acBonus").value;
    if (acBonus == "") {
      acBonus = 0
    }

    AC = 10 + dexMod + parseInt(armorBonus) + parseInt(dodgeBonus) + parseInt(acBonus)
    TAC = 10 + dexMod + parseInt(dodgeBonus) + parseInt(acBonus)
    FFAC = 10 + parseInt(armorBonus) + parseInt(acBonus)

    document.getElementById("AC").innerHTML = AC
    document.getElementById("touchAC").innerHTML = TAC
    document.getElementById("ffAC").innerHTML = FFAC

    setCookie("armorBonus", armorBonus)
    setCookie("dodgeBonus", dodgeBonus)
    setCookie("acBonus", acBonus)
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

function updateSave() {
    fortSave = document.getElementById("save-fort-cb").checked;
    fortSaveXP = document.getElementById("save-fort-exp").value;
    if (fortSaveXP == "") {
      fortSaveXP = 0
    }
    document.getElementById("save-fort-stat").innerHTML = conMod
    fortMod = conMod
    if (fortSave) {
      fortMod += parseInt(fortSaveXP)
    } else {
      fortMod += Math.floor(parseInt(fortSaveXP) / 2)
    }
    document.getElementById("save-fort-mod").innerHTML = fortMod
    setCookie("fortSave", fortSave)
    setCookie("fortSaveXP", fortSaveXP)

    refSave = document.getElementById("save-ref-cb").checked;
    refSaveXP = document.getElementById("save-ref-exp").value;
    if (refSaveXP == "") {
      refSaveXP = 0
    }
    document.getElementById("save-ref-stat").innerHTML = dexMod
    refMod = dexMod
    if (refSave) {
      refMod += parseInt(refSaveXP)
    } else {
      refMod += Math.floor(parseInt(refSaveXP) / 2)
    }
    document.getElementById("save-ref-mod").innerHTML = refMod
    setCookie("refSave", refSave)
    setCookie("refSaveXP", refSaveXP)

    willSave = document.getElementById("save-will-cb").checked;
    willSaveXP = document.getElementById("save-will-exp").value;
    if (willSaveXP == "") {
      willSaveXP = 0
    }
    document.getElementById("save-will-stat").innerHTML = wisMod
    willMod = wisMod
    if (willSave) {
      willMod += parseInt(willSaveXP)
    } else {
      willMod += Math.floor(parseInt(willSaveXP) / 2)
    }
    document.getElementById("save-will-mod").innerHTML = willMod
    setCookie("willSave", willSave)
    setCookie("willSaveXP", willSaveXP)
}

function updateSkills() {
    skillValues = {}
    statArray = [strMod, dexMod, conMod, intMod, wisMod, chaMod]

    for (let i = 0; i < skills.length; i++) {
      skillValues[skillsFormat[i]] = {}
      skillValues[skillsFormat[i]]["skillClass"] = document.getElementById("skill-" + skillsFormat[i] + "-cb").checked;
      skillValues[skillsFormat[i]]["skillXp"] = document.getElementById("skill-" + skillsFormat[i] + "-exp").value;
      if (skillValues[skillsFormat[i]]["skillXp"] == "") {
        skillValues[skillsFormat[i]]["skillXp"] = 0
      }
      document.getElementById("skill-" + skillsFormat[i] + "-stat").innerHTML = statArray[skills[i][1]]
      skillMod = statArray[skills[i][1]] + parseInt(skillValues[skillsFormat[i]]["skillXp"])
      if (skillValues[skillsFormat[i]]["skillClass"]) {
        skillMod += 2
      }
      document.getElementById("skill-" + skillsFormat[i] + "-mod").innerHTML = skillMod
    }

    setCookie("skillValues", JSON.stringify(skillValues))
}

function updateXP() {
    totalXP = document.getElementById("currentXP").value;
    if (totalXP == "") {
      totalXP = 0
    }
    setCookie("totalXP", totalXP)
    level = Math.max(Math.floor(totalXP / 22), 1)

    spentXP = 0
    xpIllegal = false

    scores = [[strScore, "str"], [dexScore, "dex"], [conScore, "con"], [intScore,"int"], [wisScore,"wis"], [chaScore, "cha"]]
    scores.sort(function(a, b) {
      return a[0] - b[0];
    });
    eliteArray = [8, 10, 12, 13, 14, 15]
    capArray = [10, 12, 14, 16, 18, 20]
    skillXPArray = [0, 0, 1, 0, 2, 3, 4, 6, 8]

    statXP = 0
    statIllegal = false
    for (let i = 0; i < 6; i++) {
      if (scores[i][0] < eliteArray[i] || scores[i][0] > capArray[i]) {
        document.getElementById(scores[i][1] + "Score").setAttribute("class", "input is-rounded is-danger");
        statIllegal = true
      } else {
        document.getElementById(scores[i][1] + "Score").setAttribute("class", "input is-rounded");
        statXP += (scores[i][0] - eliteArray[i]) * 3
      }
    }

    if (statIllegal) {
      document.getElementById("statXPText").setAttribute("style", "color: #f14668")
      document.getElementById("statXPText").innerHTML = "<strong>Stats:</strong> Invalid"
    } else {
      document.getElementById("statXPText").setAttribute("style", "color: #363636")
      document.getElementById("statXPText").innerHTML = "<strong>Stats:</strong> " + statXP + "xp"
    }
    spentXP += statXP
    xpIllegal ||= statIllegal


    saveXP = 0
    saveIllegal = false
    if (fortSaveXP > 8 || fortSaveXP == 1 || fortSaveXP == 3 || skillXPArray[fortSaveXP] > level) {
      document.getElementById("save-fort-exp").setAttribute("class", "input is-small is-danger");
      saveIllegal = true
    } else {
      document.getElementById("save-fort-exp").setAttribute("class", "input is-small");
      saveXP += skillXPArray[fortSaveXP]
    }
    if (refSaveXP > 8 || refSaveXP == 1 || refSaveXP == 3 || skillXPArray[refSaveXP] > level) {
      document.getElementById("save-ref-exp").setAttribute("class", "input is-small is-danger");
      saveIllegal = true
    } else {
      document.getElementById("save-ref-exp").setAttribute("class", "input is-small");
      saveXP += skillXPArray[refSaveXP]
    }
    if (willSaveXP > 8 || willSaveXP == 1 || willSaveXP == 3 || skillXPArray[willSaveXP] > level) {
      document.getElementById("save-will-exp").setAttribute("class", "input is-small is-danger");
      saveIllegal = true
    } else {
      document.getElementById("save-will-exp").setAttribute("class", "input is-small");
      saveXP += skillXPArray[willSaveXP]
    }
    if (saveIllegal) {
      document.getElementById("saveXPText").setAttribute("style", "color: #f14668")
      document.getElementById("saveXPText").innerHTML = "<strong>Saves:</strong> Invalid"
    } else {
      document.getElementById("saveXPText").setAttribute("style", "color: #363636")
      document.getElementById("saveXPText").innerHTML = "<strong>Saves:</strong> " + saveXP + "xp"
    }
    if (fortSave || refSave || willSave) {
      document.getElementById("goodSaveLabel").setAttribute("style", "color: #363636")
    } else {
      document.getElementById("goodSaveLabel").setAttribute("style", "color: #f14668")
    }
    spentXP += saveXP
    xpIllegal ||= saveIllegal


    skillXP = 0
    skillIllegal = false
    classSkillCount = 0
    if (JSON.stringify(skillValues) != "{}") {
      for (let i = 0; i < skills.length; i++) {
        skillValueXP = skillValues[skillsFormat[i]]["skillXp"]
        if (skillValues[skillsFormat[i]]["skillClass"]) {
          classSkillCount++
        }
        if (skillValueXP > 8 || skillValueXP == 1 || skillValueXP == 3 || skillXPArray[skillValueXP] > level) {
          document.getElementById("skill-" + skillsFormat[i] + "-exp").setAttribute("class", "input is-small is-danger");
          skillIllegal = true
        } else {
          document.getElementById("skill-" + skillsFormat[i] + "-exp").setAttribute("class", "input is-small");
          skillXP += skillXPArray[skillValueXP]
        }
      }
    }
    if (skillIllegal) {
      document.getElementById("skillXPText").setAttribute("style", "color: #f14668")
      document.getElementById("skillXPText").innerHTML = "<strong>Skills:</strong> Invalid"
    } else {
      document.getElementById("skillXPText").setAttribute("style", "color: #363636")
      document.getElementById("skillXPText").innerHTML = "<strong>Skills:</strong> " + skillXP + "xp"
    }
    if (classSkillCount >= 3) {
      document.getElementById("classSkillLabel").setAttribute("style", "color: #363636")
    } else {
      document.getElementById("classSkillLabel").setAttribute("style", "color: #f14668")
    }
    spentXP += skillXP
    xpIllegal ||= skillIllegal


    featXP = 0
    if (JSON.stringify(skillValues) != "{}") {
      for (let i = 0; i < numberOfFeats; i++) {
        if (featValues[i] != null) {
          featXP += parseInt(featValues[i]["featXp"])
        }
      }
    }
    document.getElementById("featXPText").innerHTML = "<strong>Feats:</strong> " + featXP + "xp"
    spentXP += featXP


    remainingXP = totalXP - spentXP
    if (xpIllegal) {
      document.getElementById("xpSpentText").setAttribute("style", "color: #f14668")
      document.getElementById("xpSpentText").innerHTML = "<strong>Spent XP:</strong> Invalid"
      document.getElementById("xpRemainingText").innerHTML = "<strong>Remaining XP:</strong> Invalid"
    } else {
      document.getElementById("xpSpentText").setAttribute("style", "color: #363636")
      document.getElementById("xpSpentText").innerHTML = "<strong>Spent XP:</strong> " + spentXP + "xp"
      document.getElementById("xpRemainingText").innerHTML = "<strong>Remaining XP:</strong> " + remainingXP + "xp"
    }
    if (xpIllegal || remainingXP < 0) {
      document.getElementById("xpRemainingText").setAttribute("style", "color: #f14668")
    } else {
      document.getElementById("xpRemainingText").setAttribute("style", "color: #363636")
    }

}

function updateFeats() {
  featValues = {}
  for (let i = 0; i < numberOfFeats; i++) {
    featValues[i] = {}
    feat = document.getElementById("feat-" + i)
    featName = feat.getElementsByClassName("feat-name")[0].value
    featValues[i]["featName"] = featName
    feat.getElementsByClassName("feat-name")[0].innerHTML = featName
    featXp = feat.getElementsByClassName("feat-xp")[0].value
    if (featXp == "") {
      featXp = 0
    }
    featValues[i]["featXp"] = featXp
    feat.getElementsByClassName("feat-xp")[0].innerHTML = featXp
    featDesc = feat.getElementsByClassName("feat-description")[0].value
    featValues[i]["featDesc"] = featDesc
    feat.getElementsByClassName("feat-description")[0].innerHTML = featDesc
  }

  setCookie("featValues", JSON.stringify(featValues))
  setCookie("numberOfFeats", numberOfFeats)

  if (numberOfFeats > 0) {
    for (let i = 0; i < numberOfFeats; i++) {
      feat = document.getElementById("feat-" + i)
      feat.getElementsByClassName("decrement")[0].removeAttribute("disabled")
      feat.getElementsByClassName("increment")[0].removeAttribute("disabled")
    }

    topFeat = document.getElementById("feat-0")
    topFeat.getElementsByClassName("decrement")[0].setAttribute("disabled", "")

    bottomFeat = document.getElementById("feat-" + (numberOfFeats - 1))
    bottomFeat.getElementsByClassName("increment")[0].setAttribute("disabled", "")
  }
}

function update() {
    updateXP()
    updateName()
    updateAbiScore()
    updateHP()
    updateAC()
    updateInit()
    updateSpeed()
    updateSave()
    updateSkills()
    updateFeats()
    updateXP()
}

table = document.getElementById("skill-table")
for (let i = 0; i < skills.length; i++) {
    statTags = [" (STR)", " (DEX)", " (CON)", " (INT)", " (WIS)", " (CHA)"]
    table.innerHTML += "<tr>\n<td>" + skills[i][0] + statTags[skills[i][1]] + "</td>\n<td id=\"skill-" + skillsFormat[i] + "-stat\">0</td>\n<td><input id=\"skill-" + skillsFormat[i] + "-exp\" class=\"input is-small\" type=\"text\" onchange=\"update()\" placeholder=\"0\"\noninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');\"\n/></td>\n<td><input id=\"skill-" + skillsFormat[i] + "-cb\" type=\"checkbox\" onchange=\"update()\"></td>\n<td id=\"skill-" + skillsFormat[i] + "-mod\">0</td>\n</tr>"
}

if (JSON.stringify(skillValues) != "{}") {
  for (let i = 0; i < skills.length; i++) {
    document.getElementById("skill-" + skillsFormat[i] + "-cb").checked = skillValues[skillsFormat[i]]["skillClass"]
    document.getElementById("skill-" + skillsFormat[i] + "-exp").value = skillValues[skillsFormat[i]]["skillXp"]
  }
}

var maxHeight = document.getElementById('skill-table-box').offsetHeight - 20
document.getElementById('feat-box-box').setAttribute("style", "overflow-y: auto; max-height: " + maxHeight + "px;")

update()

function editFeatId(feat, newIndex) {
  feat.setAttribute("id", "feat-" + newIndex)
  feat.getElementsByClassName("decrement")[0].setAttribute("onclick", "decrementFeat(" + newIndex + ")")
  feat.getElementsByClassName("increment")[0].setAttribute("onclick", "incrementFeat(" + newIndex + ")")
  feat.getElementsByClassName("deleteFunc")[0].setAttribute("onclick", "deleteFeat(" + newIndex + ")")
}

function createNewFeat(index) {
  if (index == -1) {
    ind = numberOfFeats
    numberOfFeats++
  } else {
    ind = index
  }
  feat = document.getElementById("feat-template").cloneNode(true)
  feat.setAttribute("id", "feat-" + ind)
  feat.removeAttribute("style")
  editFeatId(feat, ind)

  featBox = document.getElementById("feat-box")
  featBox.appendChild(feat)

  if (index == -1) {
    update()
  }
}

function deleteFeat(index) {
  document.getElementById("feat-" + index).remove();
  for (let i = index + 1; i < numberOfFeats; i++) {
    n = i - 1
    editFeatId(document.getElementById("feat-" + i), n)
  }
  numberOfFeats--

  update()
}

function incrementFeat(index) {
  currentFeat = document.getElementById("feat-" + index)
  currentFeatName = currentFeat.getElementsByClassName("feat-name")[0].value
  currentFeatXP = currentFeat.getElementsByClassName("feat-xp")[0].value
  currentFeatDesc = currentFeat.getElementsByClassName("feat-description")[0].value
  aboveFeat = document.getElementById("feat-" + (index + 1))
  aboveFeatName = aboveFeat.getElementsByClassName("feat-name")[0].value
  aboveFeatXP = aboveFeat.getElementsByClassName("feat-xp")[0].value
  aboveFeatDesc = aboveFeat.getElementsByClassName("feat-description")[0].value

  currentFeat.getElementsByClassName("feat-name")[0].value = aboveFeatName
  currentFeat.getElementsByClassName("feat-xp")[0].value = aboveFeatXP
  currentFeat.getElementsByClassName("feat-description")[0].value = aboveFeatDesc
  aboveFeat.getElementsByClassName("feat-name")[0].value = currentFeatName
  aboveFeat.getElementsByClassName("feat-xp")[0].value = currentFeatXP
  aboveFeat.getElementsByClassName("feat-description")[0].value = currentFeatDesc

  editFeatId(currentFeat, index)
  editFeatId(aboveFeat, (index + 1))

  update()
}

function decrementFeat(index) {
  currentFeat = document.getElementById("feat-" + index)
  currentFeatName = currentFeat.getElementsByClassName("feat-name")[0].value
  currentFeatXP = currentFeat.getElementsByClassName("feat-xp")[0].value
  currentFeatDesc = currentFeat.getElementsByClassName("feat-description")[0].value
  aboveFeat = document.getElementById("feat-" + (index - 1))
  aboveFeatName = aboveFeat.getElementsByClassName("feat-name")[0].value
  aboveFeatXP = aboveFeat.getElementsByClassName("feat-xp")[0].value
  aboveFeatDesc = aboveFeat.getElementsByClassName("feat-description")[0].value

  currentFeat.getElementsByClassName("feat-name")[0].value = aboveFeatName
  currentFeat.getElementsByClassName("feat-xp")[0].value = aboveFeatXP
  currentFeat.getElementsByClassName("feat-description")[0].value = aboveFeatDesc
  aboveFeat.getElementsByClassName("feat-name")[0].value = currentFeatName
  aboveFeat.getElementsByClassName("feat-xp")[0].value = currentFeatXP
  aboveFeat.getElementsByClassName("feat-description")[0].value = currentFeatDesc

  editFeatId(currentFeat, index)
  editFeatId(aboveFeat, (index - 1))

  update()
}