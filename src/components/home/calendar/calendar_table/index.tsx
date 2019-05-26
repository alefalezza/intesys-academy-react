import { Button } from "@material/react-button";
import { Cell, Row } from "@material/react-layout-grid";
import MaterialIcon from "@material/react-material-icon";
import React from "react";
import "./index.scss";

const CalendarTable: React.FunctionComponent = () => (
  <Row>
    <Cell columns={4} align="middle">
      <div className="calendar__selected_date">
        <div className="calendar__selected_date__is_today">Today</div>
        <div className="calendar__selected_date__selected_date">
          May 27
          <br /> Monday
          <br /> 2019
        </div>
      </div>
    </Cell>
    <Cell columns={8}>
      <Row className="calendar__navigation">
        <Cell columns={6} className="calendar__navigation__date">
          May 2019
        </Cell>
        <Cell columns={6} className="calendar__navigation__buttons">
          <Button>
            <MaterialIcon icon="chevron_left" />
          </Button>
          <Button>
            <MaterialIcon icon="chevron_right" />
          </Button>
        </Cell>
      </Row>
      <div className="calendar__table">
        <table>
          <thead>
            <tr>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="today">1</div>
              </td>
              <td>
                <div>2</div>
              </td>
              <td>
                <div>3</div>
              </td>
              <td>
                <div>4</div>
              </td>
              <td>
                <div>5</div>
              </td>
              <td>
                <div className="selected">6</div>
              </td>
              <td>
                <div>7</div>
              </td>
            </tr>
            <tr>
              <td>
                <div>1</div>
              </td>
              <td>
                <div>2</div>
              </td>
              <td>
                <div>3</div>
              </td>
              <td>
                <div>4</div>
              </td>
              <td>
                <div>5</div>
              </td>
              <td>
                <div>6</div>
              </td>
              <td>
                <div>7</div>
              </td>
            </tr>
            <tr>
              <td>
                <div>1</div>
              </td>
              <td>
                <div>2</div>
              </td>
              <td>
                <div>3</div>
              </td>
              <td>
                <div>4</div>
              </td>
              <td>
                <div>5</div>
              </td>
              <td>
                <div>6</div>
              </td>
              <td>
                <div>7</div>
              </td>
            </tr>
            <tr>
              <td>
                <div>1</div>
              </td>
              <td>
                <div>2</div>
              </td>
              <td>
                <div>3</div>
              </td>
              <td>
                <div>4</div>
              </td>
              <td>
                <div>5</div>
              </td>
              <td>
                <div>6</div>
              </td>
              <td>
                <div>7</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Cell>
  </Row>
);

export default CalendarTable;
