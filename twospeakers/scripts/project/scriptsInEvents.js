
// Import the main script as Main so scripts in events can
// call the methods it exports.
import * as Main from "./main.js";



const scriptsInEvents = {

		async EventSheet1_Event71_Act7(runtime, localVars)
		{
			Main.PlayComplex(localVars.tempF1,localVars.tempF2,localVars.tempA1,localVars.tempA2,localVars.tempPhiOffset1,localVars.tempPhiOffset2);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

