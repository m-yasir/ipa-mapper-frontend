import React, { Component } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './styles.scss';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "/",
      dict: "",
      pos: "",
      sim: "",
      lang1: "",
      lang2: ""
    };
    console.log(this.props);
  }

  updateState(state, value) {
    return this.setState({
      [state]: value
    });
  }

  /**
   * @param {Event} event
   */
  changeHandler(event) {
    this.updateState(event.target.name, event.target.value);
  }

  componentWillMount() {
    document.title = "Contacts";
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              // className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" color="inherit" className={classes.grow}> */}
          </Toolbar>
        </AppBar>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="divisor" />
          <h2>IPA Mapper</h2>
          <div className="divisor" />
          <div id="formDiv">
            <form className="lang-form">
              <FormControl variant="filled" className="select-control">
                <InputLabel htmlFor="filled-age-simple">Dictionary</InputLabel>
                <Select
                  value={this.state.dict}
                  onChange={this.changeHandler.bind(this)}
                  input={<FilledInput name="dict" id="filled-age-simple" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="hello">Hello</MenuItem>
                  <MenuItem value="world">World</MenuItem>
                  <MenuItem value="lorem">Lorem</MenuItem>
                  <MenuItem value="ipsum">Ipsum</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled" className="select-control">
                <InputLabel htmlFor="filled-age-simple">Parts of Speech</InputLabel>
                <Select
                  value={this.state.pos}
                  onChange={this.changeHandler.bind(this)}
                  input={<FilledInput name="pos" id="filled-age-simple" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="noun">Noun</MenuItem>
                  <MenuItem value="adjective">Adjective</MenuItem>
                  <MenuItem value="verb">Verb</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled" className="select-control">
                <InputLabel htmlFor="filled-age-simple">Similarity</InputLabel>
                <Select
                  value={this.state.sim}
                  onChange={this.changeHandler.bind(this)}
                  input={<FilledInput name="sim" id="filled-age-simple" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>10%</MenuItem>
                  <MenuItem value={20}>20%</MenuItem>
                  <MenuItem value={30}>30%</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled" className="select-control">
                <InputLabel htmlFor="filled-age-simple">Language 1</InputLabel>
                <Select
                  value={this.state.lang1}
                  onChange={this.changeHandler.bind(this)}
                  input={<FilledInput name="lang1" id="filled-age-simple" />}
                >
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="german">German</MenuItem>
                  <MenuItem value="french">French</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled" className="select-control">
                <InputLabel htmlFor="filled-age-simple">Language 2</InputLabel>
                <Select
                  value={this.state.lang2}
                  onChange={this.changeHandler.bind(this)}
                  input={<FilledInput name="lang2" id="filled-age-simple" />}
                >
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="german">German</MenuItem>
                  <MenuItem value="french">French</MenuItem>
                </Select>
              </FormControl>
            </form>
          </div>
          <Button style={{margin: 10}} onClick={() => console.log(this.state)}>Log</Button>
        </div>
      </div>
    );
  }
}

export default Contacts;
