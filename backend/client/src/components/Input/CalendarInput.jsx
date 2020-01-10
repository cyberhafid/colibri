import React, {Component} from 'react';
import {Calendar} from 'primereact/calendar';

export class CalendarInput extends Component {

    constructor() {
        super();

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        
        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);

        this.state = {
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            date8: null,
            date9: null,
            date10: null,
            date11: null,
            date12: null,
            date13: null,
            dates1: null,
            dates2: null,
            minDate: minDate,
            maxDate: maxDate,
            invalidDates: [today]
        };

    }



    render() {
       
        return (
                        
                 
                            <Calendar value={this.state.date3} onChange={(e) => this.setState({date3: e.value})} showIcon={true} />
                    
                       
            
        );
    }
}