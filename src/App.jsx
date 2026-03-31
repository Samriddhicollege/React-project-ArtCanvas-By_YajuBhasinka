import { useState, useEffect } from "react";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import SavedDrawings from "./components/SavedDrawings";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(4);
  const [tool, setTool] = useState("brush");
  const [savedDrawings, setSavedDrawings] = useState([]);
  const [canvasRef, setCanvasRef] = useState(null);
  const [showSaved, setShowSaved] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("paintDrawings");
    if (stored) setSavedDrawings(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("paintDrawings", JSON.stringify(savedDrawings));
  }, [savedDrawings]);

  const handleSaveDrawing = () => {
    if (!canvasRef) return;
    const dataURL = canvasRef.toDataURL("image/png");
    const newDrawing = {
      id: Date.now(),
      name: `Drawing ${savedDrawings.length + 1}`,
      data: dataURL,
      date: new Date().toLocaleDateString(),
    };
    setSavedDrawings((prev) => [...prev, newDrawing]);
    showNotif("Drawing saved!");
  };

  const handleDeleteDrawing = (id) => {
    setSavedDrawings((prev) => prev.filter((d) => d.id !== id));
    showNotif("Deleted!");
  };

  const handleLoadDrawing = (dataURL) => {
    if (!canvasRef) return;
    const ctx = canvasRef.getContext("2d");
    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvasRef.width, canvasRef.height);
      ctx.drawImage(img, 0, 0);
    };
    img.src = dataURL;
    setShowSaved(false);
    showNotif("Drawing loaded!");
  };

  const showNotif = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 2000);
  };

  const handleClearCanvas = () => {
    if (!canvasRef) return;
    const ctx = canvasRef.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvasRef.width, canvasRef.height);
    showNotif("Canvas cleared!");
  };

  return (
    <div className="app">

      {/* Title Bar */}
      <div className="title-bar">
        <div className="title-left">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a1 1 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a1 1 0 0 0 0-1.41z"/></svg>
          <span>Art Canvas</span>
        </div>
        {notification && <div className="notif">{notification}</div>}
      </div>

      {/* Toolbar */}
      <Toolbar
        color={color}
        setColor={setColor}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
        tool={tool}
        setTool={setTool}
        onSave={handleSaveDrawing}
        onClear={handleClearCanvas}
        onToggleSaved={() => setShowSaved((prev) => !prev)}
        savedCount={savedDrawings.length}
      />

      {/* Canvas Area */}
      <div className="canvas-area">
        <Canvas
          color={color}
          brushSize={brushSize}
          tool={tool}
          onCanvasReady={setCanvasRef}
        />
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <span>Tool: {tool === "eraser" ? "Eraser" : "Brush"}</span>
        <span>Size: {brushSize}px</span>
        <span>Saved: {savedDrawings.length}</span>
      </div>

      {showSaved && (
        <SavedDrawings
          drawings={savedDrawings}
          onDelete={handleDeleteDrawing}
          onLoad={handleLoadDrawing}
          onClose={() => setShowSaved(false)}
        />
      )}
    </div>
  );
}

export default App;