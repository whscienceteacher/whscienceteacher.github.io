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
		C3.Plugins.System.Cnds.IsBetweenAngles,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.rgbex255,
		C3.Plugins.System.Exps.max,
		C3.Plugins.System.Exps.min,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Touch.Cnds.OnDoubleTapGestureObject,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetVisible,
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
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Exps.TouchID,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Exps.BBoxLeft,
		C3.Plugins.Sprite.Exps.BBoxRight,
		C3.Plugins.Touch.Exps.X
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
	{Text: 0},
	{ButtonFilter: 0},
	{Star: 0},
	{Halo: 0},
	{Button: 0},
	{ToggleButton: 0},
	{Mode: 0},
	{ColorValue: 0},
	{Thickness: 0},
	{Factor: 0},
	{Size: 0},
	{BaseFactor: 0},
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
	{tempIndex: 0}
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
	Text: class extends self.ITextInstance {},
	ButtonFilter: class extends self.ITextInstance {},
	Star: class extends self.ISpriteInstance {},
	Halo: class extends self.ISpriteInstance {},
	Button: class extends self.ITextInstance {},
	ToggleButton: class extends self.ITextInstance {}
}