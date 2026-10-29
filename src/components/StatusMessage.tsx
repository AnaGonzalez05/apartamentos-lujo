import "../styles/StatusMessage.css";

interface StatusMessageProps {
    isLoading: boolean;
    error: string | null;
    loadingText?: string;
}

const StatusMessage = ({ isLoading, error, loadingText = "Cargando..." }: StatusMessageProps) => {
    if (isLoading) {
        return <p className="status-message page-section container">{loadingText}</p>;
    }
    if (error) {
        return (
            <p role="alert" className="status-message status-message--error page-section container">
                {error}
            </p>
        );
    }
    return null;
};

export default StatusMessage;