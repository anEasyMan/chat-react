import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.classes = useStyles;
  }
  render() {
    return (
      <div className="input">
        <div className="textarea">
          <textarea className="textarea-input" />
          <div className="btn-div">
            <div className="div-reset">
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={this.classes.margin}
              >
                Large
              </Button>
            </div>
            <div className="div-send">world</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
