import styles from "./Avatar.module.css";

interface AvatarProps {
  initials: string;
  bgColor?: any;
  variant: string;
}

export const Avatar = ({ initials, variant, bgColor }: AvatarProps) => {
  switch (variant) {
    case "small":
      return (
        <div className={`${styles.avatar_one_circle}`} style={{ backgroundColor: bgColor && bgColor}}>
          <span className={`${styles.avatar_one_initials}`}>{initials}</span>
        </div>
      );
    case "large":
      return (
        <div className={`${styles.avatar_two_circle}`} style={{ backgroundColor: bgColor && bgColor}}>
          <span className={`${styles.avatar_two_initials}`}>{initials}</span>
        </div>
      );

    default:
      return null;
  }
};
