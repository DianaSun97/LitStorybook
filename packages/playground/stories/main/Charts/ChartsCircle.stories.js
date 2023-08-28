import "../../../../../assets/css/charts.css"
import {html} from "lit";

export default {
    title: 'Charts  / Charts Circle',
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
        <div class="widget widget-big circle-column widget-show" id="NPSScore">
                <h3 class="widget-title">${args.widgetTitle}</h3>
                <div class="widget-inner">
                    <div class="widget-chart">
                        <svg class="circle-container" viewbox="0 0.5 10 8">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#F86328" />
                                    <stop offset="50%" stop-color="#F0AF2D" />
                                    <stop offset="100%" stop-color="#58A852" />
                                </linearGradient>
                            </defs>
                            <path d="M2 8 A 4 4 0 1 1 8 8" fill="none" stroke-width="1" stroke="#F1F3F9" />
                            <path class="progress" d="M2 8 A 4 4 0 1 1 8 8" fill="none" stroke-width="1"
                                stroke="url(#gradient)" stroke-dasharray="4 18 19" />
                        </svg>
                    </div>
                    <div class="widget-circle-data">
                        <div class="widget-result">
                            <div class="widget-value">${args.widgetValue}</div>
                            <div class="widget-badge" data-value="5.53">${args.widgetBadge}</div>
                        </div>
                        <div class="widget-caption">${args.widgetCaption}</div>
                    </div>

                    <ul class="widget-legend padding">
                        <li>
                            <div>${args.widgetAxe} <span>20%</span></div>
                        </li>
                        <li>
                            <div>${args.widgetAxe} <span>50%</span></div>
                        </li>
                        <li>
                            <div>${args.widgetAxe} <span>30%</span></div>
                        </li>
                    </ul>
                </div>
            </div>
       `
}

export const ChartsMultiBar = Template.bind({});
ChartsMultiBar .args = {
    widgetTitle: 'Sales per Product',
    widgetValue: '20 %',
    widgetBadge: '11.50%',
    widgetCaption: 'Apple Watch Series 8',
    data:'{{.}}',
    widgetAxe: 'Your Text',
};