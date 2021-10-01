import './App.css';
import React from 'react';
import { Button } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormLabel } from '@mui/material';
import { Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Input } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { FormHelperText } from '@mui/material';

function coffeeCalculation(measure, water) {
  return Math.round(((5.6 * water) / measure) * 100) / 100;
}

class WaterInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onWaterChange(e.target.value);
  }

  render() {
    return (
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            type="number"
            value={this.props.water}
            onChange={this.handleChange}
            endAdornment={<InputAdornment position="end">dl</InputAdornment>}
          />
          <FormHelperText>The amount of water in dl</FormHelperText>
        </FormControl>
    );
  }
}

class Measures extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onMeasureChange(e.target.value);
  }

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend" >The scoop used:</FormLabel>
        <RadioGroup
          row
          aria-label="scoop"
          defaultValue={7}
          name="radio-buttons-group"
          onChange={this.handleChange}
      >
          <FormControlLabel value={7} control={<Radio />} label="7g" />
          <FormControlLabel value={10} control={<Radio />} label="10g" />
          <FormControlLabel value={12} control={<Radio />} label="12g" />
          <FormControlLabel value={15} control={<Radio />} label="15g" />
        </RadioGroup>
      </FormControl>
    );
  }
}

class CalculationButton extends React.Component {
  render() {
    return (
      <Button variant="contained" onClick={this.props.onCalculationClick} >Calculate!</Button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleMeasureChange = this.handleMeasureChange.bind(this);
    this.handleWaterChange = this.handleWaterChange.bind(this);
    this.handleCalculationClick = this.handleCalculationClick.bind(this);
    this.state = {measure: 7, water: '', calculation: 0};
  }

  handleMeasureChange(currentMeasure) {
    this.setState({measure: currentMeasure});
  }

  handleWaterChange(currentWater) {
    this.setState({water: currentWater});
  }

  handleCalculationClick() {
    const answer = coffeeCalculation(this.state.measure, this.state.water);
    this.setState({calculation: answer});
  }

  render() {
    const water = this.state.water;
    const calculation = this.state.calculation;

    return (
      <div className="app">
        <h1>Coffee calculator</h1>
        <Measures onMeasureChange={this.handleMeasureChange} />
        <WaterInput water={water} onWaterChange={this.handleWaterChange} />
        <CalculationButton onCalculationClick={this.handleCalculationClick} />
        <h1>You need {calculation} scoops of coffee!</h1>
      </div>
    );
  }
}

export default App;