const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.Browser,
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.Keyboard,
		C3.Plugins.PlatformInfo,
		C3.Behaviors.Pin,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.projectname,
		C3.Plugins.System.Exps.projectversion,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Text.Exps.X,
		C3.Plugins.Text.Exps.TextWidth,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Exps.tokencount,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Exps.trim,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Acts.SetFunctionReturnValue,
		C3.Plugins.System.Acts.StopLoop,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.uppercase,
		C3.Plugins.System.Exps.float,
		C3.Plugins.Browser.Cnds.OnUpdateFound,
		C3.Plugins.Browser.Cnds.OnUpdateReady,
		C3.Plugins.Browser.Acts.Reload,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Touch.Cnds.OnDoubleTapGestureObject,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Exps.timescale,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.Text.Cnds.OnCreated,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Text.Acts.SetInstanceVar,
		C3.Plugins.Text.Exps.FaceSize,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Text.Acts.SetFontSize,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Exps.LayerName,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Text.Acts.SetSize,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Exps.TouchID,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Exps.BBoxLeft,
		C3.Plugins.Sprite.Exps.BBoxRight,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.System.Exps.time,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Browser.Acts.InvokeDownloadString,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Exps.right,
		C3.Plugins.System.Exps.len,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.BBoxTop,
		C3.Plugins.Sprite.Exps.BBoxBottom,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Text.Acts.SetAngle,
		C3.Plugins.Text.Acts.SetWidth,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.Sprite.Cnds.PickDistance,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Sprite.Exps.AnimationName,
		C3.Plugins.Sprite.Exps.UID,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Cnds.PickByUID,
		C3.Plugins.System.Exps.replace,
		C3.Plugins.System.Cnds.PickAll
	];
};
self.C3_JsPropNameTable = [
	{Touch: 0},
	{Browser: 0},
	{originalSize: 0},
	{ActiveButton: 0},
	{Choices: 0},
	{ToggleButtonExample: 0},
	{ProjectText: 0},
	{Logo: 0},
	{Keyboard: 0},
	{PlatformInfo: 0},
	{Name: 0},
	{SliderLabel: 0},
	{MaxValue: 0},
	{MinValue: 0},
	{Step: 0},
	{Prefix: 0},
	{Postfix: 0},
	{Value: 0},
	{FontSize: 0},
	{TouchID: 0},
	{Active: 0},
	{Decimals: 0},
	{Slider: 0},
	{SliderFill: 0},
	{Pin: 0},
	{Item: 0},
	{Clock: 0},
	{ButtonSave: 0},
	{Ruler: 0},
	{Vx0: 0},
	{Vy0: 0},
	{Ax0: 0},
	{Ay0: 0},
	{DT0: 0},
	{Dx0: 0},
	{Dy0: 0},
	{Running: 0},
	{Looping: 0},
	{startTime: 0},
	{AutoSetD0: 0},
	{PhysObj: 0},
	{DTs: 0},
	{PhysObjMultiPart: 0},
	{Info: 0},
	{GraphPointOut: 0},
	{GraphAxisLabel: 0},
	{GraphTitle: 0},
	{GraphLegend: 0},
	{XMin: 0},
	{XMax: 0},
	{YMin: 0},
	{YMax: 0},
	{XStep: 0},
	{YStep: 0},
	{xMargin: 0},
	{yMargin: 0},
	{PointSize: 0},
	{XTitle: 0},
	{YTitle: 0},
	{Title: 0},
	{LegendData: 0},
	{GraphBack: 0},
	{XVal: 0},
	{YVal: 0},
	{Label: 0},
	{GraphPoint: 0},
	{GraphAxis: 0},
	{GraphSelection: 0},
	{Button: 0},
	{ToggleButton: 0},
	{GraphPart: 0},
	{GraphLabel: 0},
	{Mode: 0},
	{ColorValue: 0},
	{Thickness: 0},
	{Template: 0},
	{Include: 0},
	{index: 0},
	{FindString: 0},
	{DataString: 0},
	{TokenString: 0},
	{NewElementString: 0},
	{NewDataString: 0},
	{N: 0},
	{outString: 0},
	{ReplaceString: 0},
	{listLen0: 0},
	{tempTotal: 0},
	{listLen: 0},
	{mean: 0},
	{tempIndex: 0},
	{PhysObjScale: 0},
	{tempDT: 0},
	{tempTime: 0},
	{tempTotalTime: 0},
	{tempElapsedTime: 0},
	{tempElapsedDx: 0},
	{tempElapsedDy: 0},
	{Vxs: 0},
	{Vys: 0},
	{lastVx: 0},
	{lastVy: 0},
	{deltaVx: 0},
	{deltaVy: 0},
	{Data: 0},
	{FileName: 0},
	{HeaderLine: 0},
	{csvString: 0},
	{csvrows: 0},
	{csvcols: 0},
	{tempRow: 0},
	{row: 0},
	{col: 0},
	{Debug: 0},
	{X: 0},
	{Y: 0},
	{Color: 0},
	{GPUID: 0},
	{dist: 0},
	{t: 0},
	{UID: 0},
	{tempU1: 0},
	{tempU2: 0},
	{mu: 0},
	{sigma: 0},
	{x: 0},
	{width: 0},
	{Xs: 0},
	{Ys: 0},
	{Colors: 0},
	{Labels: 0},
	{NewXmin: 0},
	{NewXmax: 0},
	{NewYmin: 0},
	{NewYMax: 0}
];

self.InstanceType = {
	Touch: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	ToggleButtonExample: class extends self.ITextInstance {},
	ProjectText: class extends self.ITextInstance {},
	Logo: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	PlatformInfo: class extends self.IInstance {},
	SliderLabel: class extends self.ITextInstance {},
	Slider: class extends self.ISpriteInstance {},
	SliderFill: class extends self.ISpriteInstance {},
	Item: class extends self.ITextInstance {},
	Clock: class extends self.ITextInstance {},
	ButtonSave: class extends self.ITextInstance {},
	Ruler: class extends self.ISpriteInstance {},
	PhysObj: class extends self.ISpriteInstance {},
	PhysObjMultiPart: class extends self.ISpriteInstance {},
	Info: class extends self.ITextInstance {},
	GraphPointOut: class extends self.ITextInstance {},
	GraphAxisLabel: class extends self.ITextInstance {},
	GraphTitle: class extends self.ITextInstance {},
	GraphLegend: class extends self.ITextInstance {},
	GraphBack: class extends self.ISpriteInstance {},
	GraphPoint: class extends self.ISpriteInstance {},
	GraphAxis: class extends self.ISpriteInstance {},
	GraphSelection: class extends self.ISpriteInstance {},
	Button: class extends self.ITextInstance {},
	ToggleButton: class extends self.ITextInstance {},
	GraphPart: class extends self.ISpriteInstance {},
	GraphLabel: class extends self.ITextInstance {}
}