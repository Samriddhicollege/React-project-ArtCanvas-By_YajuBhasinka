function SavedDrawings({ drawings, onDelete, onLoad, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="modal-titlebar">
          <div className="modal-title-left">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22 16V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14a2 2 0 0 0 2 2h14v-2H4V6H2z"/></svg>
            <span>Open Drawing</span>
          </div>
          <button className="modal-close" onClick={onClose}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>

        {drawings.length === 0 ? (
          <div className="modal-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#90b4d4"><path d="M22 16V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14a2 2 0 0 0 2 2h14v-2H4V6H2z"/></svg>
            <p>No saved drawings yet</p>
            <span>Draw something and click Save</span>
          </div>
        ) : (
          <div className="modal-grid">
            {drawings.map((drawing) => (
              <div key={drawing.id} className="modal-card">
                <div className="modal-thumb-wrap">
                  <img
                    src={drawing.data}
                    alt={drawing.name}
                    className="modal-thumb"
                  />
                </div>
                <div className="modal-card-info">
                  <span className="modal-card-name">{drawing.name}</span>
                  <span className="modal-date">{drawing.date}</span>
                </div>
                <div className="modal-card-actions">
                  <button className="modal-btn open-btn" onClick={() => onLoad(drawing.data)}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                    Open
                  </button>
                  <button className="modal-btn del-btn" onClick={() => onDelete(drawing.id)}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z"/></svg>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default SavedDrawings;