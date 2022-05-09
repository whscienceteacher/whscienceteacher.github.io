
// Import the main script as Main so scripts in events can
// call the methods it exports.
import * as Main from "./main.js";



const scriptsInEvents = {

		async EventSheet1_Event4_Act1(runtime, localVars)
		{
			Main.PlayTone(localVars.F2);
		},

		async EventSheet1_Event5_Act1(runtime, localVars)
		{
			Main.PlayTone(localVars.F1);
		},

		async EventSheet1_Event6_Act1(runtime, localVars)
		{
			Main.PlayTone(localVars.F3);
		},

		async EventSheet1_Event7_Act1(runtime, localVars)
		{
			Main.PlayTwo(localVars.F1,localVars.F2);
		},

		async EventSheet1_Event8_Act1(runtime, localVars)
		{
			Main.PlayTwo(localVars.F1,localVars.F3);
		},

		async EventSheet1_Event9_Act1(runtime, localVars)
		{
			Main.PlayTwo(localVars.F2,localVars.F3);
		},

		async EventSheet1_Event10_Act1(runtime, localVars)
		{
			Main.PlayThree(localVars.F1,localVars.F2,localVars.F3);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

