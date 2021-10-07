import { Typography } from "../components/Typography";

export default {
  title: "Atoms/Color",
};

const ColorComponent = (props: { title: string; className: string }) => (
  <div style={{ marginBottom: "16px", alignItems: "center", display: "flex" }}>
    <div
      style={{
        border: "1px solid rgb(255,255,255,0.10)",
        width: "64px",
        height: "64px",
      }}
      className={`stellar-color--bg--${props.title}`}
    />
    <div style={{ marginLeft: "8px" }}>
      <Typography type="medium">{props.title}</Typography>
      <Typography type="label">
        CSS Variable: {`--stellar-color--${props.title}`}
      </Typography>
      <Typography type="label">
        Background class: {`stellar-color--bg--${props.title}`}
      </Typography>
    </div>
  </div>
);

const colorClassNames = [
  "gray10",
  "gray15",
  "gray20",
  "gray30",
  "gray40",
  "gray50",
  "gray60",
  "gray70",
  "gray80",
  "gray90",
  "gray100",
  "primary--light",
  "primary--light--hover",
  "primary--dark",
  "primary--dark--hover",
];

export const Color = () => (
  <div className="story-dark">
    {colorClassNames.map((c) => (
      <ColorComponent title={c} />
    ))}
  </div>
);
