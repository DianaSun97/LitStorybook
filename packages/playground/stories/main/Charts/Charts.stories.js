import "../../../../../assets/css/charts.css"
import {html} from "lit";

export default {
    title: 'Charts / Charts Column',
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
          <div class="widget widget-big vertical-column widget-show" id="InventoryTurnover">
                <h3 class="widget-title">${args.widgetTitle}</h3>
                <div class="widget-result">
                    <div class="widget-value">${args.widgetValue}</div>
                    <div class="widget-badge" data-value="${args.widgetBadge}">${args.widgetBadge}</div>
                </div>
                <div class="widget-caption">${args.widgetCaption}</div>
                <div class="widget-chart">
                    <table id="sales-per-product" class="charts-css column show-labels show-5-secondary-axes">
                        <tbody>
                            <tr>
                                <th scope="row"><span>Jan</span>
                                <td style="--size:${args.data};"></td>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row"><span>Feb</span>
                                <td style="--size:0.55;"></td>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row"><span>Mar</span>
                                <td style="--size:${args.data};"></td>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row"><span>Apr</span>
                                <td style="--size:0.15;"></td>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row"><span>May</span>
                                <td style="--size:0.75;"></td>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row"><span>Jun</span>
                                <td style="--size:0.25;"></td>
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