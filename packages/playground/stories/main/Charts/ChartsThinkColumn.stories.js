import "../../../../../assets/css/charts.css"
import {html} from "lit";

export default {
    title: 'Charts / Charts Column Think',
    argTypes: {
        widgetTitle: { control: {type: 'text'}},
        widgetValue: { control: {type: 'text'}},
        widgetBadge: { control: {type: 'text'}},
        widgetCaption: { control: {type: 'text'}},
        data:{ control: {type: 'text'}},
        widgetAxe: { control: {type: 'text'}},
    },
    parameters: {},
};


const Template = (args) => {
    return html`
        <div class="widget widget-big vertical-column widget-show" id="NetProfit">
            <h3 class="widget-title">Net Profit</h3>
            <div class="widget-result">
                <div class="widget-value">2</div>
                <div class="widget-badge" data-value="-3.23">${args.widgetBadge}</div>
            </div>
            <div class="widget-caption">Compared to previous day</div>
            <ul class="widget-legend">
                <li>
                    <div>Label 1</div>
                </li>
                <li>
                    <div>Label 2</div>
                </li>
            </ul>
            <div class="widget-chart">
                <table id="sales-per-product"
                       class="charts-css column show-labels show-5-secondary-axes multiple side">
                    <tbody>
                    <tr>
                        <th scope="row">
                            <span>Jan</span>
                        <td style="--size:0.25;"></td>
                        <td style="--size:0.35;"></td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <span>Feb</span>
                        <td style="--size:0.65;"></td>
                        <td style="--size:0.55;"></td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <span>Mar</span>
                        <td style="--size:0.55;"></td>
                        <td style="--size:0.4;"></td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <span>Apr</span>
                        <td style="--size:0.35;"></td>
                        <td style="--size:0.15;"></td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <span>May</span>
                        <td style="--size:0.37;"></td>
                        <td style="--size:0.56;"></td>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">
                            <span>Jun</span>
                        <td style="--size:0.25;"></td>
                        <td style="--size:0.55;"></td>
                        </th>
                    </tr>
                    </tbody>
                </table>
                <ul class="widget-axe reverse">
                    <li>
                        <div>${args.widgetAxe}</div>
                    </li>
                    <li>
                        <div>${args.widgetAxe}</div>
                    </li>
                    <li>
                        <div>${args.widgetAxe}</div>
                    </li>
                    <li>
                        <div>${args.widgetAxe}</div>
                    </li>
                    <li>
                        <div>${args.widgetAxe}</div>
                    </li>
                    <li>
                        <div>${args.widgetAxe}</div>
                    </li>
                </ul>
            </div>
        </div>
       `
}

export const ChartsColumn = Template.bind({});
ChartsColumn .args = {
    widgetTitle: 'Sales per Product',
    widgetValue: '18.4K €',
    widgetBadge: '11.50%',
    widgetCaption: 'Apple Watch Series 8',
    data:'{{.}}',
    widgetAxe: '9',
};