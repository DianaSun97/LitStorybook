export class TableAccordion {
    constructor() {
        const tableRows = document.querySelectorAll('.row-table');

        // Making table rows expandable
        let currentExpandedRow = null;
        if (!tableRows) {
            return;
        }
        tableRows.forEach((row, index) => {
            row.addEventListener('click', (e) => {
                const expandableRow = document.querySelectorAll('.expandable-row')[index];
                if (currentExpandedRow !== null && currentExpandedRow !== expandableRow) {
                    currentExpandedRow.style.display = 'none';
                }
                if (expandableRow.style.display === 'none') {
                    expandableRow.style.display = 'table-row';
                    currentExpandedRow = expandableRow;
                } else {
                    expandableRow.style.display = 'none';
                    currentExpandedRow = null;
                }
            });
        });
    }
}
document.TableAccordion = TableAccordion;