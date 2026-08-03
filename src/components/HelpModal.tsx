import React from 'react';

interface HelpModalProps {
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" id="help-modal-overlay" onClick={onClose}>
      <div
        className="modal-content help-modal-content"
        id="help-modal-content"
        onClick={e => e.stopPropagation()}
      >
        <div className="help-modal-header">
          <h2 className="modal-title" style={{ fontSize: '1.75rem' }}>
            ❓ How to Play & Credits
          </h2>
          <button className="help-close-x" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="help-modal-body">
          {/* Game Concept */}
          <div className="help-section">
            <h3>🎨 Visual Pixel XOR Mechanics</h3>
            <p>
              ImageNim is a visual puzzle based on bitwise XOR arithmetic and Nim game theory.
              Clicking any outer tile toggles its pixel layer into or out of the central canvas.
              When two image layers overlap, their RGB color channels are combined pixel-by-pixel
              using bitwise <strong>XOR (A ⊕ B)</strong> arithmetic.
            </p>
          </div>

          {/* Game Modes & Features */}
          <div className="help-section">
            <h3>🎮 Game Modes & Controls</h3>
            <ul>
              <li>
                <strong>1 Player (Solitaire):</strong> Toggle outer tiles to completely clear the central canvas (making it opaque black). Solve the puzzle in as few moves as possible!
              </li>
              <li>
                <strong>2 Players (Versus):</strong> Players take turns clicking tiles. Player 1 and Player 2 are assigned target cards. The first player to make the central canvas match their assigned target card wins!
              </li>
              <li>
                <strong>🌱 Easy vs 🔥 Hard Difficulty:</strong> In <em>Easy Mode</em>, 2 or 3 cards are initially XORed into the center. In <em>Hard Mode</em>, 3 to 8 cards are XORed.
              </li>
              <li>
                <strong>🔍 Explore Mode:</strong> Turn Explore Mode ON to freely experiment with XOR tile combinations without triggering endgame popups. Turning Explore OFF restarts the puzzle.
              </li>
            </ul>
          </div>

          {/* Scoring & Ratings */}
          <div className="help-section">
            <h3>⭐ Score Ratings (1 Player)</h3>
            <p>
              Your score is evaluated based on how close your total moves are to the minimum <em>Optimal Score</em>:
            </p>
            <ul>
              <li><strong>Perfect Score:</strong> Solved in the minimal optimal moves.</li>
              <li><strong>Great:</strong> Solved within 2 moves over optimal.</li>
              <li><strong>Good:</strong> Solved within 4 moves over optimal.</li>
            </ul>
          </div>

          {/* Credits */}
          <div className="help-section credits-section">
            <h3>🏆 Credits</h3>
            <div className="credits-grid">
              <div className="credit-item">
                <span className="credit-role">Game Design & Concept</span>
                <span className="credit-name">David Maynard</span>
              </div>

              <div className="credit-item">
                <span className="credit-role">Original Photography</span>
                <span className="credit-name">David Maynard</span>
                <span className="credit-detail">(Bryce Canyon, Flowers & Flora, Sunsets & Skies, Zion National Park)</span>
              </div>

              <div className="credit-item">
                <span className="credit-role">Technology</span>
                <span className="credit-name">React + Rust / WebAssembly</span>
              </div>
            </div>
          </div>
        </div>

        <div className="button-group" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
          <button className="btn btn-primary" onClick={onClose} id="help-btn-close">
            Got It! Let's Play
          </button>
        </div>
      </div>
    </div>
  );
};
