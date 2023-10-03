import styles from "./TypographyGuide.module.css";

interface TypographyProps {}

export const TypographyGuide = ({}: TypographyProps) => {
  return (
    <div className="col-12">
      <div className="row mb-3 mt-3">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h1 className={`${styles.display_one}`}>Display</h1>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>Montserrat</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>36px</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h1 className={`${styles.display_one}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            suscipit accumsan.
          </h1>
        </div>
      </div>

      <div className="row mb-3 mt-3">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h1 className={`${styles.headline_one}`}>Headline</h1>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>Montserrat</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>24px</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h1 className={`${styles.headline_one}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            suscipit accumsan.
          </h1>
        </div>
      </div>

      <div className="row mb-3 mt-3">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h1 className={`${styles.title_one}`}>Title</h1>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>Montserrat</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>20px</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h1 className={`${styles.title_one}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            suscipit accumsan.
          </h1>
        </div>
      </div>

      <div className="row mb-3 mt-3">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h2 className={`${styles.sub_heading_one}`}>Sub Heading 1</h2>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>Montserrat</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>16px</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h2 className={`${styles.sub_heading_one}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            suscipit accumsan.
          </h2>
        </div>
      </div>

      <div className="row mb-3 mt-3">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h3 className={`${styles.sub_heading_two}`}>Sub Heading 2</h3>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>Lato</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>14px</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h3 className={`${styles.sub_heading_two}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            suscipit accumsan.
          </h3>
        </div>
      </div>

      <div className="row mb-3 mt-3">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h4 className={`${styles.body_one}`}>Body 1</h4>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>Lato</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>16px</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h4 className={`${styles.body_one}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            suscipit accumsan. Morbi lobortis consectetur, vitae sagittis tellus
            vestibulum scelerisque.
          </h4>
        </div>
      </div>

      <div className="row mb-3 mt-3">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h4 className={`${styles.body_two}`}>Body 2</h4>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>Lato</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>14px</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h4 className={`${styles.body_two}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            suscipit accumsan. Morbi lobortis consectetur, vitae sagittis tellus
            vestibulum scelerisque.
          </h4>
        </div>
      </div>

      <div className="row mb-3 mt-3">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h4 className={`${styles.button_one}`}>Button</h4>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>Lato</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>14px</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h4 className={`${styles.button_one}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
        </div>
      </div>

      <div className="row mb-3 mt-3">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h4 className={`${styles.caption_one}`}>Caption</h4>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>Lato</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>12px</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <h4 className={`${styles.caption_one}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            suscipit accumsan.
          </h4>
        </div>
      </div>

      <div className="row mb-3 mt-3">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.label_one}`}>Label</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>Lato</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.body_one} pt-2`}>10px</label>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
          <label className={`${styles.label_one}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            suscipit accumsan.
          </label>
        </div>
      </div>
    </div>
  );
};
