﻿using UnityEngine;
using System.Collections;

public class giu : MonoBehaviour {
	// Use this for initialization
	public GUIStyle men;
	void Start () {
	
	}
	
	// Update is called once per frame
	void OnGUI () {
		GUI.Label(new Rect(100,100,100,100), "Един слънчев ден слончето Лони излязло да провери пощата си",men); 

	}
}