export class Datepicker {
    constructor() {
        class Manager {
            constructor(selector) {
                this.wrapper = document.querySelector(selector)
                this.wrapper.classList.add("date-picker-calendar")

                this.datePickerDataInput = document.querySelector(this.wrapper?.dataset.date)
                this.selectedDate = new Date(this.datePickerDataInput?.value || new Date())

                this.weekStartElement = document.querySelector(this.wrapper?.dataset.weekstart)
                this.weekStart = (this.weekStartElement?.value ?? "mon").substring(0, 3)
            }

            formatNumber(number) {
                return number.toString().padStart(2, "0")
            }

            formatDate(date) {
                const d = new Date(date)
                return `${this.formatNumber(d.getFullYear())}-${this.formatNumber(d.getMonth() + 1)}-${this.formatNumber(d.getDate())}`
            }


            updateInput() {
                this.datePickerDataInput.value = this.formatDate(this.selectedDate)
                this.datePickerDataInput.dispatchEvent(new Event("change"))
            }
        }


        class DatePicker {
            monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            originalDaysOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

            canNavigateBack;
            canNavigateForward;

            constructor(className, options) {
                this.canNavigateBack = options?.backEnabled ?? true;
                this.canNavigateForward = options?.forwardEnabled ?? true;
                this.onDateClick = options?.onDateClick
                this.safeSelector = `.${className}` || ".date-picker-calendar"
                this.days = this.rearrangeDays(this.originalDaysOrder)
                this.manager = new Manager(this.safeSelector)
                this.render()
            }

            getManager() {
                return this.manager
            }

            /**
             *
             * @param {Array<string>} arr
             * @returns
             */
            rearrangeDays = (arr) => {
                const indexOfStart = arr.indexOf(arr.find(e => e.substring(0, 3).toLowerCase() === this.manager?.weekStart?.toLowerCase() ?? "mon"))
                return [arr.slice(indexOfStart, arr.length), arr.slice(0, indexOfStart)].flat()
            }


            /**
             * get text representation for the date indicator
             * @returns {String}
             */
            getSelectedDateString = () =>
                `${this.manager.selectedDate.getDate()} ${this.monthArray[this.manager.selectedDate.getMonth()]} ${this.manager.selectedDate.getFullYear()}`


            /**
             * Check if date is today
             *
             * @param {Date} someDate
             * @returns
             */
            isToday(someDate) {
                const today = new Date()
                return someDate.getDate() == today.getDate() &&
                    someDate.getMonth() == today.getMonth() &&
                    someDate.getFullYear() == today.getFullYear()
            }

            /**
             * Compare any date to the current selected date
             *
             * @param {Date} someDate
             * @returns
             */
            isSelected(someDate) {
                const transformed = new Date(someDate)

                return transformed.getDate() == this.manager.selectedDate.getDate() &&
                    transformed.getMonth() == this.manager.selectedDate.getMonth() &&
                    transformed.getFullYear() == this.manager.selectedDate.getFullYear()
            }

            /**
             * mark current date as the selected date in the UI
             */
            detectCurrentDate() {
                const currentDateElement = document.querySelector(`${this.safeSelector} [data-date="${
                    this.manager.formatDate(this.manager.selectedDate)
                }"]`)
                currentDateElement.classList.add("active")
            }

            /**
             * Generate the table header that contains the first letter of all the days in order
             *
             * The result will vary based on the week_start variable
             *
             * @returns {HTMLTableRowElement}
             */
            generateHeaderRow() {
                return new Component("tr", {
                    children: this.days.map(e => {
                        return new Component("th", {text: e.charAt(0)})
                    })
                })
            }

            /**
             * Generate datepicker navigation element
             *
             * @returns {HTMLDivElement}
             */
            generateDateOverviewAndNavigation() {
                return new Component("div", {
                    class: "flex", children: [
                        new Component("button", {
                            html: "&lt;",
                            class: "back-btn",
                            onClick: () => {
                                if (this.canNavigateBack) {
                                    this.manager.selectedDate.setMonth(this.manager.selectedDate.getMonth() - 1, 1)
                                    this.manager.updateInput()
                                }
                            }
                        }),

                        new Component("span", {
                            text: this.getSelectedDateString(),
                            class: "current-date-btn",
                            onClick: () => {
                                this.manager.selectedDate = new Date()
                                this.manager.updateInput()
                            }
                        }),

                        new Component("button", {
                            html: "&gt;",
                            class: "forward-btn",
                            onClick: () => {
                                if (this.canNavigateForward) {
                                    this.manager.selectedDate.setMonth(this.manager.selectedDate.getMonth() + 1, 1)
                                    this.manager.updateInput()
                                }
                            }
                        }),
                    ]
                });
            }

            /**
             * Generate Array of weeks that contain All the days in that week.
             *
             * First and last week may be offset by N amount of places, based on week_start variable value
             *
             * @returns {Array<Array<Date>>}
             */
            getWeekArrays() {
                const firstDay = new Date(this.manager.selectedDate)
                firstDay.setDate(1)
                const dayName = this.originalDaysOrder[firstDay.getDay()]
                const newPlacementIndex = this.days.indexOf(dayName)
                let weeks = []

                if (newPlacementIndex !== 0) {
                    weeks.push(new Array(newPlacementIndex - 1).fill(""))
                } else {
                    weeks.push(new Array(newPlacementIndex + 6).fill(""))
                }

                while (firstDay.getMonth() === new Date(this.manager.selectedDate).getMonth()) {
                    const previousIsFilled = weeks.at(-1).length > 6
                    if (previousIsFilled) {
                        weeks.push([new Date(firstDay)])
                    } else {
                        const last = weeks.pop()
                        weeks = [...weeks, [...last, new Date(firstDay)]]
                    }

                    firstDay.setDate(firstDay.getDate() + 1)
                }
                return weeks
            }

            /**
             * handle date click and update component
             *
             * @param {MouseEvent} e
             */
            calendarClickListener(e) {
                const elementValue = e.currentTarget.dataset.date
                const tempDate = new Date(this.manager.selectedDate || new Date())
                tempDate.setDate(new Date(elementValue).getDate())
                if (this.onDateClick) {
                    this.onDateClick(tempDate, e)
                } else {

                    this.manager.selectedDate = tempDate;
                    this.manager.updateInput()
                }
            }

            /**
             * Create an element for the given date
             *
             * This element becomes visible from the datepicker table component
             * @param {Date} dateinput
             * @returns {HTMLTableCellElement}
             */
            getDayElement(dateinput) {
                if (dateinput === "") return new Component("td")
                const d = new Date(dateinput)

                return new Component("td", {
                    class: [
                        "date",
                        this.isToday(d) ? "today" : "",
                        this.isSelected(d) ? "selected" : ""
                    ],
                    dataset: {date: this.manager.formatDate(d), day: d.getDate()},
                    onClick: (e) => {
                        this.calendarClickListener(e)
                    },
                    text: d.getDate()
                    // children: [
                    //     new Component("p", {
                    //         dataset: { date: this.manager.formatDate(d) },
                    //         text: d.getDate(),
                    //         onClick: (e) => { this.calendarClickListener(e)},
                    //     })
                    // ]
                })
            }

            /**
             * Populate the datepicker table with dates
             *
             * @param {HTMLBodyElement} body
             */
            generateContent() {
                const currentMonthDate = new Date(this.manager.selectedDate) // work with this
                currentMonthDate.setDate(1)

                const weeks = this.getWeekArrays()

                return weeks.map(week => {
                    return new Component("tr", {
                        children: week.map(day => this.getDayElement(day))
                    })
                })
            }


            /**
             * Generate datepicker component
             * @returns {HTMLTableElement}
             */
            generateCalendarTable() {
                return new Component("table", {
                    children: [
                        new Component("thead", {
                            children: [
                                new Component("tr", {
                                    /**
                                     * table header row
                                     */
                                    children: [
                                        new Component("th", {
                                            /**
                                             * table header navigator
                                             */
                                            children: [this.generateDateOverviewAndNavigation()],
                                            colSpan: 7
                                        })
                                    ]
                                }),
                                /**
                                 * days in week view
                                 */
                                this.generateHeaderRow()
                            ]
                        }),
                        new Component("tbody", {children: this.generateContent()})
                    ]
                })
            }

            /**
             * Manage external input change events
             * @param {Function} callback
             */
            handleListeners(callback) {
                this.manager.weekStartElement?.removeEventListener("change", callback)
                this.manager.weekStartElement?.addEventListener("change", callback)
                if (this.manager.datePickerDataInput) {
                    this.manager.datePickerDataInput?.removeEventListener("change", callback)
                    this.manager.datePickerDataInput?.addEventListener("change", callback)
                }
            }

            renderer() {

                this.days = this.rearrangeDays(this.originalDaysOrder)

                if (this.manager.wrapper) {
                    this.manager.wrapper.innerHTML = ""

                    this.manager.wrapper.append(this.generateCalendarTable())
                    this.detectCurrentDate()
                }
            }

            render() {
                this.handleListeners(() => {
                    this.renderer()

                })
                this.renderer()
            }
        }


        window.addEventListener("load", () => {
            new DatePicker("picker1")
        })
    }
}

document.Datepicker = Datepicker;