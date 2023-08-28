import "../../../../../assets/css/charts.css"
import {html} from "lit";

export default {
    title: 'Charts  / Charts Bar',
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
        <div class="widget widget-big horizontal-bar widget-show">
            <h3 class="widget-title">${args.widgetTitle}</h3>
            <div class="widget-result">
                <div class="widget-value">${args.widgetValue}</div>
                <div class="widget-badge" data-value=${args.widgetValue}>${args.widgetValue}</div>
            </div>
            <div class="widget-caption">Top in this day</div>
            <div>${args.widgetCaption}</div>
            <div class="widget-chart">
                <table id="sales-per-product"
                       class="charts-css bar show-labels show-primary-axis show-data-axes data-spacing-8">
                    <tbody>
                    <tr>
                        <th scope="row"><span>Apple Watch Series 8</span></th>
                        <td style="--size:${args.data};"><span class="data">1399 €</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Apple iPhone 13 Pro Max</span></th>
                        <td style="--size:${args.data};"><span class="data">1099 €</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Samsung Galaxy S21 Ultra</span></th>
                        <td style="--size:${args.data};"><span class="data">999 €</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Sony Playstation 5</span></th>
                        <td style="--size:${args.data};"><span class="data">499 €</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Microsoft Xbox Series X</span></th>
                        <td style="--size:${args.data};"><span class="data">499 €</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Samsung Galaxy Watch 4</span></th>
                        <td style="--size:${args.data};"><span class="data">249 €</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Bose QuietComfort 35 II Wireless Headphones</span></th>
                        <td style="--size:${args.data};"><span class="data">299 €</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Fitbit Charge 5)</span></th>
                        <td style="--size:${args.data};"><span class="data">179 €</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Amazon Echo Dot (4th Generation)</span></th>
                        <td style="--size:${args.data};"><span class="data">49 €</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Google Nest Mini (2nd Generation)</span></th>
                        <td style="--size:${args.data};"><span class="data">34 €</span></td>
                    </tr>
                    </tbody>
                </table>
                <ul class="widget-axe">
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

export const ChartsBar = Template.bind({});
ChartsBar .args = {
    widgetTitle: 'Sales per Product',
    widgetValue: '18.4K €',
    widgetBadge: '11.50%',
    widgetCaption: 'Apple Watch Series 8',
    data:'{{.}}',
    widgetAxe: '9',
};