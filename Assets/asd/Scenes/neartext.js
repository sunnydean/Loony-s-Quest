﻿#pragma strict
var a : GameObject;
function OnTriggerEnter () {
a.gameObject.SetActive(true);
}

function OnTriggerExit () {
a.gameObject.SetActive(false);

}