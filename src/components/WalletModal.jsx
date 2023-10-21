import { useConnectors } from "@starknet-react/core";
import styles from "./WalletModal.module.css";  // Import it as styles

const Modal = ({ show, onClose, onConnect }) => {
    const { connect, connectors } = useConnectors();

    if (!show) {
        return null;
    }

    const handleConnect = (connector) => {
        connect(connector);
        onConnect();
    }

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles["modal-content"]} onClick={e => e.stopPropagation()}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <p>Select a wallet to connect:</p>
                {connectors.map((connector) => (
                    <li key={connector.id}>
                        <button onClick={() => handleConnect(connector)}>
                            Connect {connector.id}
                        </button>
                    </li>
                ))}
            </div>
        </div>
    );
};

export { Modal };
