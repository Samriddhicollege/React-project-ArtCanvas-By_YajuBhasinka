// Reusable Button Component (Criteria 14)
function Button({ label, icon, onClick, active = false }) {
  return (
    <button
      className={`toolbar-btn ${active ? "toolbar-btn-active" : ""}`}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {label}
    </button>
  );
}

export default Button;