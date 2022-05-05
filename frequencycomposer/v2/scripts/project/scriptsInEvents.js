
// Import the main script as Main so scripts in events can
// call the methods it exports.
import * as Main from "./main.js";



const scriptsInEvents = {

		async EventSheet1_Event3_Act5(runtime, localVars)
		{
			Main.PlayTwo(localVars.F1,localVars.F2);
		},

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
			Main.PlayTwo(localVars.F1,localVars.F2);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

