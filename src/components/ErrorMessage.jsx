// Component to display error messages
function ErrorMessage({ message }) {
    if (!message) return null;
    return <h3>{message}</h3>;
}

export default ErrorMessage;