var TimeUtils = new function() {
    
    var UNITS = [
        {name: 'milliseconds', scale: 1000},
        {name: 'seconds',      scale: 60},
        {name: 'minutes',      scale: 60},
        {name: 'hours',        scale: 24},
        {name: 'days',         scale: 30},
        {name: 'months',       scale: 12}
    ];
    var LABELS = [
        {name: 'years',   unit: 'y'},
        {name: 'months',  unit: 'm'},
        {name: 'days',    unit: 'd'},
        {name: 'hours',   unit: 'h'},
        {name: 'minutes', unit: 'min'},
        {name: 'seconds', unit: 's'}
    ];

    var self = this;

    function renderPart(period, label) {
        var value = period[label.name];
        if (value) {
            return value + label.unit;
        }
        return null;
    }

    self.calculatePeriod = function(t1, t2, units) {
        if(units == null) {
            units = UNITS;
        }
        var dt = t2 - t1;
        var result = { };
        for(var i = 0; i < units.length; ++i) {
            var unit = units[i];
            var total = Math.floor(dt / unit.scale);
            var rest = dt - total * unit.scale;
            result[unit.name] = rest;
            dt = total;
        }
        result.years = dt;
        return result;
    };

    // Renders period (timespan / moment) string.
    //
    // period - rendered period
    // done - returned string when period is smaller than labels precision
    // size - number or rendered parts (for 2 renders '[value1][unit2] [value2][unit2]')
    // labels - array of own custom labels
    //
    self.renderPeriod$1 = function(period, done, size, labels) {
        if (labels == null) {
            labels = LABELS;
        }
        if (size == null) {
            size = 2;
        }
        var result = '';
        for (var i = 0; i < labels.length && size > 0; ++i) {
            var part = renderPart(period, labels[i]);
            if (part) {
                if (result) {
                    result += ' ';
                }
                size -= 1;
                result += part;
            } else {
                if (result) {
                    break;
                }
            }
        }
        return result || done || '0ms';
    };

    // Renders period (timespan / moment) string for difference between current system time and t2.
    //
    // time - time of event
    // done - returned string when period is smaller than labels precision
    // size - number or rendered parts (for 2 renders '[value1][unit2] [value2][unit2]')
    // labels - array of own custom labels
    //
    self.renderPeriod$2 = function(time, done, size, labels) {
        var now = self.getTime();
        return self.renderPeriod$2(time, now, done, size, labels);
    };

    // Renders period (timespan / moment) string for difference between t1 and t2.
    //
    // t1 - start time
    // t2 - end time
    // done - returned string when period is smaller than labels precision
    // size - number or rendered parts (for 2 renders '[value1][unit2] [value2][unit2]')
    // labels - array of own custom labels
    //
    self.renderPeriod$3 = function(t1, t2, done, size, labels) {
        var period = self.calculatePeriod(t1, t2);
        return self.renderPeriod$1(period, done, size, labels);
    };
};


export default TimeUtils;
