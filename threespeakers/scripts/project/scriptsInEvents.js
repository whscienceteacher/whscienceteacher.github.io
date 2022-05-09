
// Import the main script as Main so scripts in events can
// call the methods it exports.
import * as Main from "./main.js";



const scriptsInEvents = {

		async EventSheet1_Event73_Act10(runtime, localVars)
		{
			Main.PlayTriple(localVars.tempF1,localVars.tempF2,localVars.tempF3,localVars.tempA1,localVars.tempA2,localVars.tempA3,localVars.tempPhiOffset1,localVars.tempPhiOffset2,localVars.tempPhiOffset3);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

