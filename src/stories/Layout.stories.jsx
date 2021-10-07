import { Typography } from "../components/Typography";

export default {
  title: "System/Layout",
};

export const Layout = () => (
  <div>
    <div>
      <Typography type="medium">Grid Unit (8px)</Typography>
      <Typography type="label">
        CSS Variable: --stellar-layout--gridUnit
      </Typography>
      <Typography type="label">
        Vertical Spacing Class: stellar-layout--gridSpacing--vertical--1
      </Typography>
      <div
        style={{
          background: "#ff000073",
          width: "50px",
          marginTop: "var(--stellar-layout--gridUnit)",
        }}
        className="stellar-layout--gridSpacing--vertical--1"
      />
    </div>
    <div className="stellar-layout--gridSpacing--vertical--3" />
    <div>
      <Typography type="medium">Grid Unit 2x</Typography>
      <Typography type="label">
        CSS Variable: --stellar-layout--gridUnit2x
      </Typography>
      <Typography type="label">
        Vertical Spacing Class: stellar-layout--gridSpacing--vertical--2
      </Typography>
      <div
        style={{
          background: "#ff000073",
          width: "50px",
          marginTop: "var(--stellar-layout--gridUnit)",
        }}
        className="stellar-layout--gridSpacing--vertical--2"
      />
    </div>
    <div className="stellar-layout--gridSpacing--vertical--3" />
    <div>
      <Typography type="medium">Grid Unit 3x</Typography>
      <Typography type="label">
        CSS Variable: --stellar-layout--gridUnit3x
      </Typography>
      <Typography type="label">
        Vertical Spacing Class: stellar-layout--gridSpacing--vertical--3
      </Typography>
      <div
        style={{
          background: "#ff000073",
          width: "50px",
          marginTop: "var(--stellar-layout--gridUnit)",
        }}
        className="stellar-layout--gridSpacing--vertical--3"
      />
    </div>
    <div className="stellar-layout--gridSpacing--vertical--3" />
    <div>
      <Typography type="medium">Grid Unit 4x</Typography>
      <Typography type="label">
        CSS Variable: --stellar-layout--gridUnit4x
      </Typography>
      <Typography type="label">
        Vertical Spacing Class: stellar-layout--gridSpacing--vertical--4
      </Typography>
      <div
        style={{
          background: "#ff000073",
          width: "50px",
          marginTop: "var(--stellar-layout--gridUnit)",
        }}
        className="stellar-layout--gridSpacing--vertical--4"
      />
    </div>
  </div>
);
