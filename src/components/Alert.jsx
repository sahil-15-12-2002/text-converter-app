export default function Alert({ alert }) {
  if (!alert) return null;

  const getAlertIcon = (type) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'danger':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '📢';
    }
  };

  return (
    <div className={`alert alert-${alert.type}`} role="alert">
      <span className="alert-icon">{getAlertIcon(alert.type)}</span>
      <div className="alert-content">
        <strong>{alert.type}:</strong>
        <span>{alert.msg}</span>
      </div>
      <button
        type="button"
        className="alert-close"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}
