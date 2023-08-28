import "../../../../../assets/css/charts.css"
import {html} from "lit";

export default {
    title: 'Charts / Charts Lines',
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
        <div class="widget widget-big lines color-purple widget-show" id="TotalSales">
            <h3 class="widget-title">${args.widgetTitle}</h3>
            <div class="widget-result">
                <div class="widget-value">${args.widgetValue}</div>
                <div class="widget-badge" data-value="3.23">${args.widgetBadge}</div>
            </div>
            <div class="widget-caption">${args.widgetCaption}</div>
            <ul class="widget-legend">
                <li>
                    <div>This day</div>
                </li>
                <li>
                    <div>Previous day</div>
                </li>
            </ul>
            <div class="widget-chart">
                <table id="total-sales"
                       class="charts-css line multiple hide-data show-data-on-hover show-labels show-4-secondary-axes">
                    <tbody>
                    <tr>
                        <th scope="row"><span>Jan</span></th>
                        <td style="--start:0; --size:0.15;"><span class="data">15</span></td>
                        <td style="--start:0; --size:0.05;"><span class="data">5</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Feb</span></th>
                        <td style="--start:0.15; --size:0.3;"><span class="data">30</span></td>
                        <td style="--start:0.05; --size:0.15;"><span class="data">15</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Mar</span></th>
                        <td style="--start:0.3; --size:0.45;"><span class="data">45</span></td>
                        <td style="--start:0.15; --size:0.35;"><span class="data">35</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Apr</span></th>
                        <td style="--start:0.45; --size:0.3;"><span class="data">30</span></td>
                        <td style="--start:0.35; --size:0.55;"><span class="data">55</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>May</span></th>
                        <td style="--start:0.3; --size:0.55;"><span class="data">55</span></td>
                        <td style="--start:0.55; --size:0.65;"><span class="data">65</span></td>
                    </tr>
                    <tr>
                        <th scope="row"><span>Jun</span></th>
                        <td style="--start:0.55; --size:0.65;"><span class="data">65</span></td>
                        <td style="--start:0.65; --size:0.45;"><span class="data">45</span></td>
                    </tr>
                    </tbody>
                </table>
                <ul class="widget-axe reverse">
                    <li>
                        <div>0</div>
                    </li>
                    <li>
                        <div>25</div>
                    </li>
                    <li>
                        <div>50</div>
                    </li>
                    <li>
                        <div>75</div>
                    </li>
                    <li>
                        <div>100</div>
                    </li>
                </ul>
            </div>
        </div>

    `
}

export const ChartLines = Template.bind({});
ChartLines .args = {
    widgetTitle: 'Sales per Product',
    widgetValue: '18.4K €',
    widgetBadge: '11.50%',
    widgetCaption: 'Apple Watch Series 8',
    data:'{{.}}',
    widgetAxe: '9',
};