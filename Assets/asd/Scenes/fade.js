﻿var theTexture : Texture2D;
private var StartTime : float;
 
function OnLevelWasLoaded(){
  StartTime = Time.time;
}
 
function Update(){
  if(Time.time-StartTime >= 5){
    Destroy(gameObject);
  }
}
 
function OnGUI(){
  GUI.color = Color.white;
 
  GUI.color.a = Mathf.Lerp(2.0, 0.0, (Time.time-StartTime));
 
  GUI.DrawTexture(Rect(0,0,Screen.width, Screen.height), theTexture);
 
}