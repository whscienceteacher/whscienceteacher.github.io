const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Plugins.DrawingCanvas,
		C3.Plugins.Touch,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.System.Exps.max,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Sprite.Cnds.CompareWidth,
		C3.Plugins.DrawingCanvas.Acts.OutlineEllipse,
		C3.Plugins.Sprite.Exps.BBoxMidX,
		C3.Plugins.Sprite.Exps.BBoxMidY,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.System.Exps.rgba
	];
};
self.C3_JsPropNameTable = [
	{DragDrop: 0},
	{Ruler: 0},
	{DrawingCanvas: 0},
	{Touch: 0},
	{Circle: 0}
];

self.InstanceType = {
	Ruler: class extends self.ISpriteInstance {},
	DrawingCanvas: class extends self.IDrawingCanvasInstance {},
	Touch: class extends self.IInstance {},
	Circle: class extends self.ISpriteInstance {}
}