﻿using UnityEngine;
using System.Collections;

public class shirs11 : MonoBehaviour {
	void OnTriggerEnter(Collider player) {
		Destroy (this.gameObject);
		Application.LoadLevelAdditiveAsync ("vupros10");
		Time.timeScale = 0;
	}
}