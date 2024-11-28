import { useAlert } from "../../context/AlertContext";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";
import styles from "../../styles/Alert.module.scss";

const Alert = () => {
  const { alerts } = useAlert();

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <FaCheckCircle className="mr-2 text-green-500" />;
      case "error":
        return <FaExclamationCircle className="mr-2 text-red-500" />;
      case "info":
        return <FaInfoCircle className="mr-2 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="toast">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`alert mt-2 ${alert.isVisible ? "" : styles["fade-out"]}`}
        >
          {getIcon(alert.type)}
          {alert.message}
        </div>
      ))}
    </div>
  );
};

export default Alert;
