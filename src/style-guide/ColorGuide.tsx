import { BodyTwo, HeadingOne } from "../components/index";
import styles from "./ColorGuide.module.css";

interface ColorGuideProps {}
export const ColorGuide = ({}: ColorGuideProps) => {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <HeadingOne title="Primary" />
          <div className="mt-3">
            <div
              className={`${styles.primary_one_bg} ${styles.box_1} mt-1`}
            ></div>
            <div className="mt-2 mb-4">
              <BodyTwo content="RGB(246, 153, 83)" />
              <BodyTwo content="--primary-1" />
            </div>
            <div
              className={`${styles.primary_two_bg} ${styles.box_1} mt-2`}
            ></div>
            <div className="mt-2 mb-4">
              <BodyTwo content="RGB(1, 28, 52)" />
              <BodyTwo content="--primary-2" />
            </div>
            <div
              className={`${styles.primary_three_bg} ${styles.box_1} mt-2`}
            ></div>
            <div className="mt-2 mb-4">
              <BodyTwo content="#41335B" />
              <BodyTwo content="--primary-3" />
            </div>
            <div
              className={`${styles.primary_four_bg} ${styles.box_1} mt-2`}
            ></div>
            <div className="mt-2 mb-4">
              <BodyTwo content="RGB(41, 61, 59)" />
              <BodyTwo content="--primary-4" />
            </div>
            <div
              className={`${styles.primary_five_bg} ${styles.box_1} mt-2`}
            ></div>
            <div className="mt-2 mb-4">
              <BodyTwo content="RGB(0, 136, 255)" />
              <BodyTwo content="--primary-5" />
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <HeadingOne title="Shades" />
          <div className="mt-3">
            <div
              className={`${styles.shades_one_bg} ${styles.box_1} mt-1`}
            ></div>
            <div className="mt-2 mb-4">
              <BodyTwo content="RGBA(246, 153, 83, 0.20)" />
              <BodyTwo content="--shades-1" />
            </div>
            <div
              className={`${styles.shades_two_bg} ${styles.box_1} mt-2`}
            ></div>
            <div className="mt-2 mb-4">
              <BodyTwo content="RGBA(55, 52, 52, 0.20)" />
              <BodyTwo content="--shades-2" />
            </div>
            <div
              className={`${styles.shades_three_bg} ${styles.box_1} mt-2`}
            ></div>
            <div className="mt-2 mb-4">
              <BodyTwo content="RGBA(4, 93, 173, 0.20)" />
              <BodyTwo content="--shades-3" />
            </div>
            <div
              className={`${styles.shades_four_bg} ${styles.box_1} mt-2`}
            ></div>
            <div className="mt-2 mb-4">
              <BodyTwo content="RGBA(4, 93, 173, 0.50)" />
              <BodyTwo content="--shades-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
