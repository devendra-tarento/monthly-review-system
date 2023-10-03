import { BodyTwo } from "../headings/BodyTwo";
import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  message: string;
}

export const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className="col-12">
      <div
        className={`d-flex justify-content-center align-self-center ${styles.empty_state}`}
      >
        <BodyTwo content={message} />
      </div>
    </div>
  );
};
