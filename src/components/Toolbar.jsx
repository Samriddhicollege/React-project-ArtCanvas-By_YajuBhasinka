import Button from "./Button";

function Toolbar({
  color, setColor,
  brushSize, setBrushSize,
  tool, setTool,
  onSave, onClear, onToggleSaved, savedCount,
}) {

  const colors = [
    "#000000", "#ffffff", "#7f7f7f", "#c3c3c3",
    "#880015", "#b97a57", "#ff0000", "#ffaec9",
    "#ff7f27", "#ffc90e", "#fff200", "#efe4b0",
    "#22b14c", "#b5e61d", "#00a2e8", "#99d9ea",
    "#3f48cc", "#7092be", "#a349a4", "#c8bfe7",
  ];

  const sizes = [2, 4, 6, 10, 16];

  const handleSizeChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1 && val <= 50) setBrushSize(val);
  };

  return (
    <div className="toolbar">

      {/* File Actions */}
      <div className="toolbar-group">
        <span className="group-label">File</span>
        <div className="toolbar-row">
          <Button label="Save" icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4zm-5 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm3-10H5V5h10v4z"/></svg>
          } onClick={onSave} />
          <Button label="Clear" icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z"/></svg>
          } onClick={onClear} />
          <Button label={`Gallery (${savedCount})`} icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14a2 2 0 0 0 2 2h14v-2H4V6H2z"/></svg>
          } onClick={onToggleSaved} />
        </div>
      </div>

      <div className="divider" />

      {/* Tools */}
      <div className="toolbar-group">
        <span className="group-label">Tools</span>
        <div className="toolbar-row">
          <Button label="Brush" icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a1 1 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a1 1 0 0 0 0-1.41z"/></svg>
          } onClick={() => setTool("brush")} active={tool === "brush"} />
          <Button label="Eraser" icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.14 3 21 8.86 8.86 21H3v-5.86L15.14 3zm0 2.83L5 15.97V19h3.03L18.17 8.86l-3.03-3.03z"/></svg>
          } onClick={() => setTool("eraser")} active={tool === "eraser"} />
        </div>
      </div>

      <div className="divider" />

      {/* Brush Size */}
      <div className="toolbar-group">
        <span className="group-label">Size</span>
        <div className="toolbar-row">
          {sizes.map((s) => (
            <button
              key={s}
              className={`size-btn ${brushSize === s ? "size-active" : ""}`}
              onClick={() => setBrushSize(s)}
              title={`${s}px`}
            >
              <span
                className="size-dot"
                style={{
                  width: s > 10 ? 14 : s > 5 ? 10 : s > 3 ? 7 : 4,
                  height: s > 10 ? 14 : s > 5 ? 10 : s > 3 ? 7 : 4,
                }}
              />
            </button>
          ))}
        </div>
        <input
          type="number"
          min="1"
          max="50"
          value={brushSize}
          onChange={handleSizeChange}
          className="size-input"
        />
      </div>

      <div className="divider" />

      {/* Color */}
      <div className="toolbar-group">
        <span className="group-label">Color</span>
        <div className="toolbar-row" style={{ alignItems: "center", gap: 6 }}>
          <div className="active-color-box" style={{ backgroundColor: color }} title={color} />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="color-input"
            title="Custom color"
          />
        </div>
        <div className="color-palette">
          {colors.map((c) => (
            <button
              key={c}
              className={`color-swatch ${color === c ? "swatch-active" : ""}`}
              style={{ backgroundColor: c }}
              onClick={() => setColor(c)}
              title={c}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Toolbar;